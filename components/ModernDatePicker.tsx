"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
} from "lucide-react";

export interface ModernDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  minDate?: Date | null;
  placeholder?: string;
  id?: string;
  className?: string;
  theme?: "light" | "dark";
  label?: string;
  isReturn?: boolean;
}

export interface ModernTimePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  className?: string;
  theme?: "light" | "dark";
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const TIME_PRESETS = [
  { label: "06:00 AM", sub: "Early Morning", value: "06:00 AM" },
  { label: "09:00 AM", sub: "Morning", value: "09:00 AM" },
  { label: "01:30 PM", sub: "Afternoon", value: "01:30 PM" },
  { label: "05:00 PM", sub: "Evening", value: "05:00 PM" },
  { label: "08:30 PM", sub: "Night", value: "08:30 PM" },
  { label: "11:00 PM", sub: "Late Night", value: "11:00 PM" },
];

function formatDateDisplay(d: Date): string {
  const day = d.getDate();
  const m = MONTH_SHORT[d.getMonth()];
  const y = d.getFullYear();
  return `${day} ${m} ${y}`;
}

export function parseDateString(str: string): Date | null {
  if (!str) return null;
  const parts = str.trim().split(/\s+/);
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const monthIndex = MONTH_SHORT.indexOf(parts[1]);
    const year = parseInt(parts[2], 10);
    if (!isNaN(day) && monthIndex !== -1 && !isNaN(year)) {
      return new Date(year, monthIndex, day);
    }
  }
  const fallback = new Date(str);
  return isNaN(fallback.getTime()) ? null : fallback;
}

export default function ModernDatePicker({
  value,
  onChange,
  minDate = null,
  placeholder = "Select date",
  id = "travelDate",
  className = "",
  theme = "light",
  label,
  isReturn = false,
}: ModernDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Set initial calendar view to match value or minDate
  useEffect(() => {
    if (value) {
      const parsed = parseDateString(value);
      if (parsed) {
        setCurrentMonth(parsed.getMonth());
        setCurrentYear(parsed.getFullYear());
      }
    } else if (minDate && !isNaN(minDate.getTime())) {
      setCurrentMonth(minDate.getMonth());
      setCurrentYear(minDate.getFullYear());
    }
  }, [value, minDate]);

  // Handle outside click and escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleSelectDate = (day: number) => {
    const selected = new Date(currentYear, currentMonth, day);
    const formatted = formatDateDisplay(selected);
    onChange(formatted);
    setIsOpen(false);
  };

  const applyPreset = (offsetDays: number) => {
    let base = new Date();
    if (minDate && isReturn && !isNaN(minDate.getTime())) {
      base = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
    }
    base.setDate(base.getDate() + offsetDays);
    setCurrentMonth(base.getMonth());
    setCurrentYear(base.getFullYear());
    onChange(formatDateDisplay(base));
    setIsOpen(false);
  };

  const isPastDate = (day: number) => {
    const dateToCheck = new Date(currentYear, currentMonth, day);
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    if (minDate && isReturn) {
      const minMidnight = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
      return dateToCheck < minMidnight;
    }

    return dateToCheck < startOfToday;
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    if (!value) return false;
    const parsed = parseDateString(value);
    if (!parsed) return false;
    return (
      day === parsed.getDate() &&
      currentMonth === parsed.getMonth() &&
      currentYear === parsed.getFullYear()
    );
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
  };

  const isLight = theme === "light";
  const displayTitle = label || (isReturn ? "Return Date (To)" : "Departure Date (From)");

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded text-sm font-mono flex items-center justify-between cursor-pointer transition-all text-left ${
          isLight
            ? "bg-[#F6F3EC] border border-[#DCD4C4] text-[#14120F] hover:border-[#B08D3F] focus:border-[#B08D3F]"
            : "bg-[#1C1914] border border-[#383229] text-[#F6F3EC] hover:border-[#B08D3F] focus:border-[#B08D3F]"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={`Select ${displayTitle}`}
      >
        <span className="flex items-center gap-2.5 truncate">
          <CalendarIcon className="w-4 h-4 text-[#C9A227] shrink-0" />
          <span className={value ? (isLight ? "text-[#14120F] font-semibold" : "text-[#F6F3EC] font-semibold") : (isLight ? "text-stone-400" : "text-[#F6F3EC]/40")}>
            {value || placeholder}
          </span>
        </span>

        {value ? (
          <span
            role="button"
            tabIndex={0}
            onClick={clearSelection}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") clearSelection(e as any);
            }}
            className="p-1 text-stone-400 hover:text-[#C9A227] transition-colors cursor-pointer"
            title="Clear date"
          >
            <X className="w-3.5 h-3.5" />
          </span>
        ) : (
          <span className="font-mono text-xs text-[#B08D3F]">▾</span>
        )}
      </button>

      <input type="hidden" name={id} value={value} />

      {/* Popover Calendar */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 right-0 sm:right-auto sm:w-[340px] mt-2 bg-[#181510] border border-[#B08D3F] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-4 font-mono animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl text-[#F6F3EC]">
          {/* Header Title */}
          <div className="mb-3 pb-2.5 border-b border-[#383229] flex items-center justify-between">
            <div className="text-xs font-bold text-[#E0C068] uppercase tracking-wider flex items-center gap-1.5">
              <CalendarIcon className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>{displayTitle}</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#F6F3EC]/60 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Presets */}
          <div className="grid grid-cols-4 gap-1.5 mb-3">
            {!isReturn ? (
              <>
                <button
                  type="button"
                  onClick={() => applyPreset(0)}
                  className="py-1 px-1 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
                >
                  Today
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset(1)}
                  className="py-1 px-1 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
                >
                  Tomorrow
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset(2)}
                  className="py-1 px-1 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
                >
                  In 2 Days
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset(7)}
                  className="py-1 px-1 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
                >
                  +1 Week
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => applyPreset(0)}
                  className="py-1 px-1 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
                >
                  Same Day
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset(1)}
                  className="py-1 px-1 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
                >
                  +1 Day
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset(2)}
                  className="py-1 px-1 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
                >
                  +2 Days
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset(7)}
                  className="py-1 px-1 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
                >
                  +1 Week
                </button>
              </>
            )}
          </div>

          {/* Month / Year Navigator */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#F6F3EC] uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span>
                {MONTH_NAMES[currentMonth]} {currentYear}
              </span>
            </span>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-1 rounded bg-[#14120F] border border-[#383229] text-[#F6F3EC] hover:text-[#C9A227] hover:border-[#B08D3F] transition-colors"
                aria-label="Previous Month"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1 rounded bg-[#14120F] border border-[#383229] text-[#F6F3EC] hover:text-[#C9A227] hover:border-[#B08D3F] transition-colors"
                aria-label="Next Month"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Day Names Header */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {DAY_NAMES.map((d, i) => (
              <div key={i} className="text-[10px] text-[#B08D3F] font-bold uppercase py-0.5">
                {d}
              </div>
            ))}
          </div>

          {/* Day Grid */}
          <div className="grid grid-cols-7 gap-1 text-center mb-3">
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8" />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const past = isPastDate(dayNum);
              const selected = isSelected(dayNum);
              const current = isToday(dayNum);

              let styleClasses = "text-[#F6F3EC] hover:bg-[#B08D3F]/20 hover:text-[#E0C068]";

              if (past) {
                styleClasses = "text-[#F6F3EC]/20 cursor-not-allowed";
              } else if (selected) {
                styleClasses = "bg-gradient-to-r from-[#B08D3F] to-[#E0C068] text-[#14120F] font-bold shadow-md rounded-md";
              } else if (current) {
                styleClasses = "border border-[#B08D3F]/70 text-[#C9A227]";
              }

              return (
                <button
                  key={`day-${dayNum}`}
                  type="button"
                  disabled={past}
                  onClick={() => handleSelectDate(dayNum)}
                  className={`h-8 text-xs font-semibold transition-all flex flex-col items-center justify-center relative cursor-pointer ${styleClasses}`}
                >
                  <span>{dayNum}</span>
                  {current && !selected && (
                    <span className="w-1 h-1 rounded-full bg-[#C9A227] absolute bottom-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="pt-2 border-t border-[#383229] flex items-center justify-between text-[11px]">
            <span className="text-stone-400">
              {value ? <span className="text-[#E0C068] font-bold">✓ {value}</span> : "Select a day"}
            </span>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-3 py-1 bg-[#14120F] hover:bg-[#B08D3F] text-[#E0C068] hover:text-[#14120F] border border-[#B08D3F] rounded text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-1"
            >
              <Check className="w-3 h-3" />
              <span>Done</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function ModernTimePicker({
  value,
  onChange,
  placeholder = "e.g. 06:00 AM or enter custom time",
  id = "pickupTime",
  className = "",
  theme = "light",
}: ModernTimePickerProps) {
  const isLight = theme === "light";

  const handleNativeTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!val) return;
    const [hours, minutes] = val.split(":");
    const h = parseInt(hours, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    const formattedH = h % 12 || 12;
    onChange(`${formattedH.toString().padStart(2, "0")}:${minutes} ${ampm}`);
  };

  return (
    <div className={`space-y-2 font-mono ${className}`}>
      {/* Custom Time Enter Field */}
      <div className="relative flex items-center">
        <Clock className="w-4 h-4 text-[#C9A227] absolute left-3.5 pointer-events-none shrink-0" />
        <input
          type="text"
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full pl-10 pr-16 py-2.5 rounded text-sm transition-all outline-none ${
            isLight
              ? "bg-[#F6F3EC] border border-[#DCD4C4] text-[#14120F] placeholder-stone-400 focus:border-[#B08D3F]"
              : "bg-[#1C1914] border border-[#383229] text-[#F6F3EC] placeholder-[#F6F3EC]/30 focus:border-[#B08D3F]"
          }`}
        />

        <div className="absolute right-2.5 flex items-center gap-1">
          {value ? (
            <button
              type="button"
              onClick={() => onChange("")}
              className="p-1 text-stone-400 hover:text-[#C9A227] transition-colors cursor-pointer"
              title="Clear time"
              aria-label="Clear time"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : null}

          {/* Native Clock Picker Trigger */}
          <label
            htmlFor={`${id}-native-clock`}
            className="p-1 text-stone-400 hover:text-[#C9A227] transition-colors cursor-pointer"
            title="Pick exact clock time"
          >
            <Clock className="w-3.5 h-3.5" />
            <input
              id={`${id}-native-clock`}
              type="time"
              className="sr-only"
              onChange={handleNativeTimeChange}
              tabIndex={-1}
            />
          </label>
        </div>
      </div>

      {/* Suggested Timings Chips */}
      <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
        <span
          className={`text-[10px] uppercase tracking-wider ${
            isLight ? "text-stone-500 font-semibold" : "text-stone-400"
          }`}
        >
          Suggested:
        </span>
        {TIME_PRESETS.map((p) => {
          const isSelected =
            value?.trim().toLowerCase() === p.value.toLowerCase() ||
            value?.startsWith(p.label);

          return (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                if (isSelected) {
                  onChange("");
                } else {
                  onChange(p.value);
                }
              }}
              className={`px-2 py-1 rounded text-[11px] font-mono transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#B08D3F] text-[#14120F] font-bold border-[#C9A227] shadow-sm"
                  : isLight
                  ? "bg-[#EFEAE0] hover:bg-[#E5DFD1] text-[#14120F]/80 border-[#DCD4C4] hover:border-[#B08D3F]"
                  : "bg-[#14120F] hover:bg-[#B08D3F]/20 text-[#F6F3EC]/80 border-[#383229] hover:border-[#B08D3F] hover:text-[#E0C068]"
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
