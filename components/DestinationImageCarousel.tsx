"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Camera } from "lucide-react";
import type { TourPackageImage } from "@/lib/constants";

interface DestinationImageCarouselProps {
  images?: TourPackageImage[];
  fallbackSrc: string;
  fallbackAlt: string;
  stampBadge?: string;
  className?: string;
  priority?: boolean;
  staggerOffsetMs?: number;
}

export default function DestinationImageCarousel({
  images,
  fallbackSrc,
  fallbackAlt,
  stampBadge,
  className = "relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border-b border-[#DCD4C4]",
  priority = false,
  staggerOffsetMs = 0,
}: DestinationImageCarouselProps) {
  const slides: TourPackageImage[] =
    images && images.length > 0
      ? images
      : [{ src: fallbackSrc, alt: fallbackAlt }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const totalSlides = slides.length;
  const hasMultiple = totalSlides > 1;

  const goToNext = useCallback(
    (e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    },
    [totalSlides]
  );

  const goToPrev = useCallback(
    (e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartXRef.current = null;
  };

  useEffect(() => {
    if (!hasMultiple || isPaused) return;

    let intervalId: NodeJS.Timeout;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 4300);
    }, staggerOffsetMs);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [hasMultiple, isPaused, totalSlides, staggerOffsetMs]);

  const currentSlide = slides[currentIndex] || slides[0];

  return (
    <div
      className={`${className} select-none group/destcarousel`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Destination photo gallery"
    >
      {/* Slides with Crossfade */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.src + idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-100 z-[1]" : "opacity-0 pointer-events-none z-0"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={priority && idx === 0}
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        );
      })}

      {/* Atmospheric Vignette Overlays */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-t from-black/75 via-transparent to-black/35 opacity-70" />

      {/* Top Header Row: Stamp Badge & Slide Count with Indicators */}
      <div className="absolute top-2.5 inset-x-2.5 sm:top-3 sm:inset-x-3 z-10 flex items-center justify-between gap-1.5 pointer-events-none">
        {stampBadge && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#14120F]/90 border border-[#B08D3F]/80 rounded text-[10px] font-mono text-[#E0C068] tracking-widest uppercase backdrop-blur-md shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B6B]" />
            <span className="truncate max-w-[170px] sm:max-w-[200px]">{stampBadge}</span>
          </div>
        )}

        {hasMultiple && (
          <div className="bg-[#14120F]/90 border border-white/20 px-2 py-1 rounded text-[10px] font-mono text-[#F6F3EC]/90 backdrop-blur-md flex items-center gap-1.5 shadow-md shrink-0 pointer-events-auto">
            <Camera className="w-2.5 h-2.5 text-[#C9A227]" />
            <span>
              {currentIndex + 1}/{totalSlides}
            </span>
            <span className="w-px h-2.5 bg-white/20 mx-0.5" />
            <div className="flex items-center gap-1">
              {slides.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => goToSlide(idx, e)}
                    aria-label={`Show ${slide.label || `photo ${idx + 1}`}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-3 bg-[#E0C068] shadow-[0_0_5px_rgba(224,192,104,0.6)]"
                        : "w-1.5 bg-white/40 hover:bg-white/80"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Prev/Next Arrows */}
      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous photo"
            className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-black/70 hover:bg-[#14120F] border border-white/20 hover:border-[#B08D3F] text-white hover:text-[#E0C068] flex items-center justify-center transition-all opacity-0 group-hover/destcarousel:opacity-100 focus:opacity-100 shadow-md backdrop-blur-sm"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next photo"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-black/70 hover:bg-[#14120F] border border-white/20 hover:border-[#B08D3F] text-white hover:text-[#E0C068] flex items-center justify-center transition-all opacity-0 group-hover/destcarousel:opacity-100 focus:opacity-100 shadow-md backdrop-blur-sm"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </>
      )}

      {/* Bottom Row: Landmark Label (Dedicated Full Width, Zero Overlap) */}
      {currentSlide.label && (
        <div className="absolute bottom-2.5 inset-x-2.5 sm:bottom-3 sm:inset-x-3 z-10 pointer-events-auto flex items-end">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#14120F]/90 backdrop-blur-md border border-white/20 font-mono text-[10px] sm:text-[10.5px] text-[#E0C068] font-medium tracking-wide shadow-md max-w-full">
            <MapPin className="w-2.5 h-2.5 text-[#C9A227] shrink-0" />
            <span className="break-words leading-tight">{currentSlide.label}</span>
          </div>
        </div>
      )}
    </div>
  );
}
