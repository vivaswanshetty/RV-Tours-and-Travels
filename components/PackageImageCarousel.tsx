"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Clock, ChevronLeft, ChevronRight, MapPin, Camera } from "lucide-react";
import type { TourPackageImage } from "@/lib/constants";

interface PackageImageCarouselProps {
  images?: TourPackageImage[];
  fallbackSrc: string;
  fallbackAlt: string;
  durationBadge: string;
  packageBadge?: string;
  staggerOffsetMs?: number;
  priority?: boolean;
  borderClassName?: string;
}

export default function PackageImageCarousel({
  images,
  fallbackSrc,
  fallbackAlt,
  durationBadge,
  packageBadge,
  staggerOffsetMs = 0,
  priority = false,
  borderClassName = "border-b border-[#383229]",
}: PackageImageCarouselProps) {
  // Normalize images list (ensure at least 1 image)
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

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Staggered auto-rotation
  useEffect(() => {
    if (!hasMultiple || isPaused) return;

    // Optional initial delay to stagger multiple cards on the page
    let intervalId: NodeJS.Timeout;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 4200);
    }, staggerOffsetMs);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [hasMultiple, isPaused, totalSlides, staggerOffsetMs]);

  const currentSlide = slides[currentIndex] || slides[0];

  return (
    <div
      className={`relative aspect-[16/10] w-full bg-[#1C1914] overflow-hidden ${borderClassName} select-none group/carousel`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Package destination photo gallery"
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority && idx === 0}
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        );
      })}

      {/* Atmospheric Vignette Overlays */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-t from-[#14120F] via-transparent to-black/35 opacity-80" />

      {/* Top Row Badges */}
      <div className="absolute top-3 inset-x-3 z-10 flex items-center justify-between gap-2 pointer-events-none">
        {/* Left Side: Package Badge & Photo Counter */}
        <div className="flex items-center gap-2 flex-wrap">
          {packageBadge && (
            <span className="inline-block font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 bg-[#14120F]/90 text-[#E0C068] border border-[#B08D3F]/60 rounded backdrop-blur-sm shadow-md">
              {packageBadge}
            </span>
          )}
          {hasMultiple && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#14120F]/90 backdrop-blur-md border border-white/20 font-mono text-[10px] text-[#F6F3EC]/90 font-semibold tracking-wide shadow-md pointer-events-auto">
              <Camera className="w-3 h-3 text-[#C9A227]" />
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

        {/* Right Side: Duration Badge */}
        <div className="bg-[#14120F]/90 border border-white/20 px-2.5 py-1 rounded text-[10px] font-mono text-[#F6F3EC] backdrop-blur-sm flex items-center gap-1 shadow-md shrink-0">
          <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>{durationBadge}</span>
        </div>
      </div>

      {/* Interactive Prev/Next Arrows (desktop hover or focus) */}
      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous destination photo"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/65 hover:bg-[#14120F] border border-white/20 hover:border-[#B08D3F] text-white hover:text-[#E0C068] flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 shadow-md backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next destination photo"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/65 hover:bg-[#14120F] border border-white/20 hover:border-[#B08D3F] text-white hover:text-[#E0C068] flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 shadow-md backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Bottom Row: Landmark Label (Dedicated Full Width, Zero Overlap) */}
      {currentSlide.label && (
        <div className="absolute bottom-2.5 inset-x-3 z-10 pointer-events-auto flex items-end">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#14120F]/90 backdrop-blur-md border border-white/20 font-mono text-[10px] sm:text-[10.5px] text-[#E0C068] font-medium tracking-wide shadow-md max-w-full">
            <MapPin className="w-2.5 h-2.5 text-[#C9A227] shrink-0" />
            <span className="break-words leading-tight">{currentSlide.label}</span>
          </div>
        </div>
      )}
    </div>
  );
}
