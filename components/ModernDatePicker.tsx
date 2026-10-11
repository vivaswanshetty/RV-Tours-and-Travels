"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export interface ModernDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  startDate?: string;
  endDate?: string;
  onRangeChange?: (start: string, end: string, formatted: string) => void;
  pickupTime?: string;
  onTimeChange?: (time: string) => void;
  placeholder?: string;
  id?: string;
  className?: string;
  theme?: "light" | "dark";
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
  { label: "Flexible", sub: "Any Time (Optional)", value: "Flexible (Optional)" },
  { label: "06:00 AM", sub: "Early Morning", value: "06:00 AM (Early Morning)" },
  { label: "09:00 AM", sub: "Morning", value: "09:00 AM (Morning)" },
  { label: "01:30 PM", sub: "Afternoon", value: "01:30 PM (Afternoon)" },
  { label: "05:00 PM", sub: "Evening", value: "05:00 PM (Evening)" },
  { label: "08:30 PM", sub: "Night", value: "08:30 PM (Night)" },
  { label: "11:00 PM", sub: "Late Night", value: "11:00 PM (Late Night)" },
];

function formatDateDisplay(d: Date): string {
  const day = d.getDate();
  const m = MONTH_SHORT[d.getMonth()];
  const y = d.getFullYear();
  return `${day} ${m} ${y}`;
}

function formatDateShort(d: Date): string {
  const day = d.getDate();
  const m = MONTH_SHORT[d.getMonth()];
  return `${day} ${m}`;
}

function formatRangeString(start: Date, end: Date): string {
  const startStr = formatDateDisplay(start);
  const endStr = formatDateDisplay(end);

  const startMidnight = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endMidnight = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  const diffDays = Math.round((endMidnight.getTime() - startMidnight.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  if (diffDays <= 1) {
    return `${startStr} (Same Day Return)`;
  }
  return `${startStr} to ${endStr} (${diffDays} Days)`;
}

export default function ModernDatePicker({
  value,
  onChange,
  onRangeChange,
  pickupTime,
  onTimeChange,
  placeholder = "Select travel dates (From – To)",
  id = "travelDates",
  className = "",
  theme = "light",
}: ModernDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  // Parse initial value if empty or reset
  useEffect(() => {
    if (!value) {
      setStartDate(null);
      setEndDate(null);
    }
  }, [value]);

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

  const commitRange = (start: Date, end: Date) => {
    const formatted = formatRangeString(start, end);
    onChange(formatted);
    if (onRangeChange) {
      onRangeChange(formatDateDisplay(start), formatDateDisplay(end), formatted);
    }
  };

  const handleDateClick = (day: number) => {
    const clicked = new Date(currentYear, currentMonth, day);

    // If starting fresh or both already set, set start date
    if (!startDate || (startDate && endDate)) {
      setStartDate(clicked);
      setEndDate(null);
      // Temporary 1-day value while waiting for return date
      const singleFormatted = `${formatDateDisplay(clicked)} (Tap return date)`;
      onChange(singleFormatted);
      return;
    }

    // If start is set, choosing return / end date
    if (startDate && !endDate) {
      if (clicked < startDate) {
        // Clicked before start, restart with this as start
        setStartDate(clicked);
        setEndDate(null);
        onChange(`${formatDateDisplay(clicked)} (Tap return date)`);
      } else {
        // Valid end date selected
        setEndDate(clicked);
        commitRange(startDate, clicked);
      }
    }
  };

  const applyPreset = (daysCount: number, startOffset = 0) => {
    const s = new Date();
    s.setDate(s.getDate() + startOffset);
    const e = new Date(s);
    e.setDate(s.getDate() + (daysCount - 1));

    setCurrentMonth(s.getMonth());
    setCurrentYear(s.getFullYear());
    setStartDate(s);
    setEndDate(e);
    commitRange(s, e);
  };

  const isPastDate = (day: number) => {
    const dateToCheck = new Date(currentYear, currentMonth, day);
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dateToCheck < startOfToday;
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isStart = (day: number) => {
    if (!startDate) return false;
    return (
      day === startDate.getDate() &&
      currentMonth === startDate.getMonth() &&
      currentYear === startDate.getFullYear()
    );
  };

  const isEnd = (day: number) => {
    if (!endDate) return false;
    return (
      day === endDate.getDate() &&
      currentMonth === endDate.getMonth() &&
      currentYear === endDate.getFullYear()
    );
  };

  const isInRange = (day: number) => {
    const current = new Date(currentYear, currentMonth, day);
    if (startDate && endDate) {
      return current > startDate && current < endDate;
    }
    if (startDate && !endDate && hoverDate) {
      return current > startDate && current <= hoverDate;
    }
    return false;
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStartDate(null);
    setEndDate(null);
    onChange("");
    if (onRangeChange) onRangeChange("", "", "");
  };

  const isLight = theme === "light";

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
        aria-label="Pick travel dates from this to this"
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
            title="Clear travel dates"
          >
            <X className="w-3.5 h-3.5" />
          </span>
        ) : (
          <span className="font-mono text-xs text-[#B08D3F]">▾</span>
        )}
      </button>

      <input type="hidden" name={id} value={value} />

      {/* Popover Range Calendar */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 right-0 sm:right-auto sm:w-[380px] mt-2 bg-[#181510] border border-[#B08D3F] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-4 sm:p-5 font-mono animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl text-[#F6F3EC]">
          {/* Header Title with Range Progress */}
          <div className="mb-3 pb-3 border-b border-[#383229] flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#E0C068] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Travel Dates (From – To)</span>
              </div>
              <div className="text-[11px] text-[#F6F3EC]/70 mt-0.5">
                {!startDate && "Step 1: Pick departure / start date"}
                {startDate && !endDate && "Step 2: Pick return date (or tap same date for 1 day)"}
                {startDate && endDate && (
                  <span className="text-[#C9A227] font-semibold">
                    ✓ {formatDateShort(startDate)} ➔ {formatDateShort(endDate)} ({formatRangeString(startDate, endDate).split("(")[1]}
                  </span>
                )}
              </div>
            </div>

            {/* Same day quick shortcut */}
            {startDate && !endDate && (
              <button
                type="button"
                onClick={() => {
                  setEndDate(startDate);
                  commitRange(startDate, startDate);
                }}
                className="text-[10px] uppercase font-bold px-2 py-1 bg-[#B08D3F]/20 text-[#E0C068] border border-[#B08D3F] rounded hover:bg-[#B08D3F] hover:text-[#14120F] transition-colors"
              >
                1-Day Trip
              </button>
            )}
          </div>

          {/* Quick Presets Strip */}
          <div className="grid grid-cols-4 gap-1.5 mb-3.5">
            <button
              type="button"
              onClick={() => applyPreset(1, 0)}
              className="py-1 px-1.5 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => applyPreset(1, 1)}
              className="py-1 px-1.5 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
            >
              Tomorrow
            </button>
            <button
              type="button"
              onClick={() => applyPreset(2, 0)}
              className="py-1 px-1.5 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
            >
              2 Days
            </button>
            <button
              type="button"
              onClick={() => applyPreset(3, 0)}
              className="py-1 px-1.5 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
            >
              3 Days
            </button>
          </div>

          {/* Month / Year Navigator */}
          <div className="flex items-center justify-between mb-2.5">
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

          {/* Calendar Day Grid */}
          <div className="grid grid-cols-7 gap-1 text-center mb-3">
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8" />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const past = isPastDate(dayNum);
              const start = isStart(dayNum);
              const end = isEnd(dayNum);
              const inRange = isInRange(dayNum);
              const current = isToday(dayNum);

              let styleClasses = "text-[#F6F3EC] hover:bg-[#B08D3F]/20 hover:text-[#E0C068]";

              if (past) {
                styleClasses = "text-[#F6F3EC]/20 cursor-not-allowed";
              } else if (start && end) {
                // Same day single date
                styleClasses = "bg-gradient-to-r from-[#B08D3F] to-[#E0C068] text-[#14120F] font-bold shadow-md rounded-md";
              } else if (start) {
                styleClasses = "bg-gradient-to-r from-[#B08D3F] to-[#C9A227] text-[#14120F] font-bold rounded-l-md shadow-md";
              } else if (end) {
                styleClasses = "bg-gradient-to-r from-[#C9A227] to-[#B08D3F] text-[#14120F] font-bold rounded-r-md shadow-md";
              } else if (inRange) {
                styleClasses = "bg-[#B08D3F]/25 text-[#E0C068] font-semibold";
              } else if (current) {
                styleClasses = "border border-[#B08D3F]/70 text-[#C9A227]";
              }

              return (
                <button
                  key={`day-${dayNum}`}
                  type="button"
                  disabled={past}
                  onClick={() => handleDateClick(dayNum)}
                  onMouseEnter={() => {
                    if (startDate && !endDate && !past) {
                      setHoverDate(new Date(currentYear, currentMonth, dayNum));
                    }
                  }}
                  onMouseLeave={() => setHoverDate(null)}
                  className={`h-8 text-xs font-semibold transition-all flex flex-col items-center justify-center relative cursor-pointer ${styleClasses}`}
                >
                  <span>{dayNum}</span>
                  {start && !end && (
                    <span className="text-[7px] uppercase font-bold text-[#14120F] leading-none absolute -bottom-0.5">
                      FROM
                    </span>
                  )}
                  {end && !start && (
                    <span className="text-[7px] uppercase font-bold text-[#14120F] leading-none absolute -bottom-0.5">
                      TO
                    </span>
                  )}
                  {current && !start && !end && !inRange && (
                    <span className="w-1 h-1 rounded-full bg-[#C9A227] absolute bottom-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Optional Pickup Time selector integrated into bottom of modal */}
          {onTimeChange && (
            <div className="pt-2.5 border-t border-[#383229]">
              <div className="flex items-center justify-between text-[11px] text-[#B08D3F] uppercase tracking-wider font-bold mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                  Pickup Time <span className="text-stone-400 font-normal lowercase">(optional)</span>
                </span>
                <span className="text-[#F6F3EC] text-[11px] font-semibold">
                  {pickupTime || "Flexible"}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-1">
                {TIME_PRESETS.slice(0, 4).map((p) => {
                  const active = pickupTime === p.value || (!pickupTime && p.label === "Flexible");
                  return (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => onTimeChange(p.value)}
                      className={`py-1 px-1 rounded text-[9px] border text-center transition-all ${
                        active
                          ? "bg-[#B08D3F] text-[#14120F] font-bold border-[#E0C068]"
                          : "bg-[#14120F] text-[#F6F3EC]/70 border-[#383229] hover:border-[#B08D3F]"
                      }`}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Modal Footer */}
          <div className="mt-3 pt-2.5 border-t border-[#383229] flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={clearSelection}
              className="text-[10px] text-stone-400 hover:text-[#E0C068] uppercase underline underline-offset-2 transition-colors cursor-pointer"
            >
              Reset Dates
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-3.5 py-1.5 bg-[#14120F] hover:bg-[#B08D3F] text-[#E0C068] hover:text-[#14120F] border border-[#B08D3F] rounded text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
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
  placeholder = "Flexible / As required (Optional)",
  id = "pickupTime",
  className = "",
  theme = "light",
}: ModernTimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [customTime, setCustomTime] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectPreset = (presetVal: string) => {
    onChange(presetVal);
    setIsOpen(false);
  };

  const handleCustomTimeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTime) return;

    // Convert 24hr to 12hr format
    const [hours, minutes] = customTime.split(":");
    const h = parseInt(hours, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    const formattedH = h % 12 || 12;
    const formatted = `${formattedH.toString().padStart(2, "0")}:${minutes} ${ampm} (Custom Time)`;

    onChange(formatted);
    setIsOpen(false);
  };

  const isLight = theme === "light";

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
        aria-label="Pick preferred pickup time (optional)"
      >
        <span className="flex items-center gap-2.5 truncate">
          <Clock className="w-4 h-4 text-[#C9A227] shrink-0" />
          <span className={value ? (isLight ? "text-[#14120F] font-semibold" : "text-[#F6F3EC] font-semibold") : (isLight ? "text-stone-400" : "text-[#F6F3EC]/40")}>
            {value || placeholder}
          </span>
        </span>

        {value && value !== "Flexible (Optional)" ? (
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              onChange("Flexible (Optional)");
            }}
            className="p-1 text-stone-400 hover:text-[#C9A227] transition-colors cursor-pointer"
            title="Reset to flexible"
          >
            <X className="w-3.5 h-3.5" />
          </span>
        ) : (
          <span className="font-mono text-xs text-[#B08D3F]">▾</span>
        )}
      </button>

      <input type="hidden" name={id} value={value} />

      {/* Popover Time Presets */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 right-0 sm:right-auto sm:w-[320px] mt-2 bg-[#181510] border border-[#B08D3F] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-4 font-mono animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl text-[#F6F3EC]">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#383229] mb-3">
            <span className="text-xs font-bold text-[#E0C068] uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
              Pickup Time (Optional)
            </span>
            <span className="text-[10px] text-stone-400">Non-mandatory</span>
          </div>

          {/* Time Presets Grid */}
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {TIME_PRESETS.map((p) => {
              const active = value === p.value || (!value && p.label === "Flexible");
              return (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => handleSelectPreset(p.value)}
                  className={`py-2 px-2.5 rounded text-left border transition-all cursor-pointer ${
                    active
                      ? "bg-[#B08D3F] text-[#14120F] font-bold border-[#E0C068] shadow"
                      : "bg-[#14120F] text-[#F6F3EC]/80 border-[#383229] hover:border-[#B08D3F] hover:text-[#E0C068]"
                  }`}
                >
                  <div className="text-xs font-bold leading-tight">{p.label}</div>
                  <div className={`text-[9px] uppercase tracking-tight ${active ? "text-[#14120F]/80" : "text-[#F6F3EC]/50"}`}>
                    {p.sub}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Custom Time Input */}
          <form onSubmit={handleCustomTimeSubmit} className="pt-2.5 border-t border-[#383229] flex items-center gap-2">
            <div className="flex-1">
              <label htmlFor="custom-time-picker" className="block text-[10px] text-[#B08D3F] uppercase mb-1">
                Or exact clock time:
              </label>
              <input
                id="custom-time-picker"
                type="time"
                value={customTime}
                onChange={(e) => setCustomTime(e.target.value)}
                className="w-full px-2.5 py-1.5 bg-[#14120F] border border-[#383229] rounded text-xs text-[#F6F3EC] focus:border-[#B08D3F] outline-none font-mono"
              />
            </div>
            <button
              type="submit"
              disabled={!customTime}
              className="mt-4 px-3 py-1.5 bg-[#B08D3F] disabled:opacity-30 text-[#14120F] rounded text-xs font-bold uppercase transition-colors"
            >
              Set
            </button>
          </form>

          {/* Done CTA */}
          <div className="mt-3 pt-2 border-t border-[#383229] flex justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-3.5 py-1.5 bg-[#14120F] hover:bg-[#B08D3F] text-[#E0C068] hover:text-[#14120F] border border-[#B08D3F] rounded text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Done</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
