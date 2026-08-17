"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, X, Check } from "lucide-react";

interface ModernDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  className?: string;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const TIME_PRESETS = [
  { label: "06:00 AM", desc: "Early Morning" },
  { label: "09:00 AM", desc: "Morning" },
  { label: "01:30 PM", desc: "Afternoon" },
  { label: "05:00 PM", desc: "Evening" },
  { label: "08:30 PM", desc: "Night" },
  { label: "11:00 PM", desc: "Late Night" },
];

export default function ModernDatePicker({
  value,
  onChange,
  placeholder = "Select travel date & time",
  id = "travelDate",
  className = "",
}: ModernDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("09:00 AM");

  // Parse existing value if it matches our standard format
  useEffect(() => {
    if (!value) {
      setSelectedDate(null);
    }
  }, [value]);

  // Close calendar when clicked outside or pressed Escape
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

  const formatFinalValue = (date: Date, time: string) => {
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()].slice(0, 3);
    const year = date.getFullYear();
    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];
    return `${dayName}, ${day} ${month} ${year} · ${time}`;
  };

  const handleSelectDate = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    onChange(formatFinalValue(newDate, selectedTime));
  };

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    if (selectedDate) {
      onChange(formatFinalValue(selectedDate, time));
    } else {
      // Default to today if time picked before date
      const d = new Date();
      setSelectedDate(d);
      onChange(formatFinalValue(d, time));
    }
  };

  const handlePreset = (offsetDays: number) => {
    const target = new Date();
    target.setDate(target.getDate() + offsetDays);
    setCurrentMonth(target.getMonth());
    setCurrentYear(target.getFullYear());
    setSelectedDate(target);
    onChange(formatFinalValue(target, selectedTime));
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

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    );
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Input Trigger Box */}
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-[#14120F] border border-[#383229] hover:border-[#B08D3F]/80 rounded text-sm text-[#F6F3EC] focus:border-[#B08D3F] focus:outline-none font-mono flex items-center justify-between cursor-pointer transition-colors text-left"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Pick travel date and time"
      >
        <span className="flex items-center gap-2.5 truncate">
          <CalendarIcon className="w-4 h-4 text-[#C9A227] shrink-0" />
          <span className={value ? "text-[#F6F3EC] font-semibold" : "text-[#F6F3EC]/50 font-normal"}>
            {value || placeholder}
          </span>
        </span>

        {value ? (
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedDate(null);
              onChange("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
                setSelectedDate(null);
                onChange("");
              }
            }}
            className="p-1 text-[#F6F3EC]/50 hover:text-[#E0C068] transition-colors cursor-pointer"
            title="Clear date"
          >
            <X className="w-3.5 h-3.5" />
          </span>
        ) : (
          <span className="font-mono text-xs text-[#B08D3F]">▾</span>
        )}
      </button>

      {/* Hidden input for standard form submission if needed */}
      <input type="hidden" id={`${id}-hidden`} name={id} value={value} />

      {/* Modern Popover Modal */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 right-0 sm:right-auto sm:w-[360px] mt-2 bg-[#181510] border border-[#B08D3F] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-4 sm:p-5 font-mono animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
          {/* Quick Presets Strip */}
          <div className="grid grid-cols-4 gap-1.5 mb-4 pb-3 border-b border-[#383229]">
            <button
              type="button"
              onClick={() => handlePreset(0)}
              className="py-1 px-2 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => handlePreset(1)}
              className="py-1 px-2 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
            >
              Tomorrow
            </button>
            <button
              type="button"
              onClick={() => handlePreset(2)}
              className="py-1 px-2 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
            >
              In 2 Days
            </button>
            <button
              type="button"
              onClick={() => handlePreset(7)}
              className="py-1 px-2 text-[10px] bg-[#14120F] hover:bg-[#B08D3F]/20 hover:text-[#E0C068] border border-[#383229] hover:border-[#B08D3F] rounded text-center text-[#F6F3EC]/80 uppercase transition-colors"
            >
              +1 Week
            </button>
          </div>

          {/* Month & Year Navigator */}
          <div className="flex items-center justify-between mb-3">
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
                className="p-1.5 rounded bg-[#14120F] border border-[#383229] text-[#F6F3EC] hover:text-[#C9A227] hover:border-[#B08D3F] transition-colors"
                aria-label="Previous Month"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1.5 rounded bg-[#14120F] border border-[#383229] text-[#F6F3EC] hover:text-[#C9A227] hover:border-[#B08D3F] transition-colors"
                aria-label="Next Month"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Day of Week Header */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
            {DAY_NAMES.map((d, i) => (
              <div key={i} className="text-[10px] text-[#B08D3F] font-bold uppercase py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center mb-4">
            {/* Empty slots for days before 1st of month */}
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8" />
            ))}

            {/* Days of current month */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const past = isPastDate(dayNum);
              const selected = isSelected(dayNum);
              const current = isToday(dayNum);

              return (
                <button
                  key={`day-${dayNum}`}
                  type="button"
                  disabled={past}
                  onClick={() => handleSelectDate(dayNum)}
                  className={`
                    h-8 text-xs font-semibold rounded transition-all flex flex-col items-center justify-center relative
                    ${past ? "text-[#F6F3EC]/20 cursor-not-allowed" : "cursor-pointer"}
                    ${selected ? "bg-gradient-to-br from-[#E0C068] to-[#B08D3F] text-[#14120F] font-bold shadow-md scale-105" : ""}
                    ${!selected && !past ? "text-[#F6F3EC] hover:bg-[#B08D3F]/20 hover:text-[#E0C068]" : ""}
                    ${current && !selected ? "border border-[#B08D3F]/70 text-[#C9A227]" : ""}
                  `}
                >
                  <span>{dayNum}</span>
                  {current && !selected && (
                    <span className="w-1 h-1 rounded-full bg-[#C9A227] absolute bottom-1" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Time Picker Section */}
          <div className="pt-3 border-t border-[#383229] space-y-2">
            <div className="flex items-center justify-between text-[11px] text-[#B08D3F] uppercase tracking-wider font-bold">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                Preferred Pickup Time
              </span>
              <span className="text-[#F6F3EC] text-xs font-bold">{selectedTime}</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {TIME_PRESETS.map((p) => {
                const active = selectedTime === p.label;
                return (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => handleSelectTime(p.label)}
                    className={`
                      py-1.5 px-2 rounded text-[10px] border flex flex-col items-center justify-center transition-all
                      ${active
                        ? "bg-[#B08D3F] text-[#14120F] font-bold border-[#E0C068]"
                        : "bg-[#14120F] text-[#F6F3EC]/80 border-[#383229] hover:border-[#B08D3F] hover:text-[#E0C068]"
                      }
                    `}
                  >
                    <span>{p.label}</span>
                    <span className={`text-[8px] uppercase tracking-tight ${active ? "text-[#14120F]/80" : "text-[#F6F3EC]/50"}`}>
                      {p.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Confirm Footer */}
          <div className="mt-4 pt-3 border-t border-[#383229] flex items-center justify-between gap-2">
            <div className="text-[10px] text-[#F6F3EC]/70 truncate">
              {selectedDate ? (
                <span className="text-[#C9A227] font-semibold">
                  ✓ {formatFinalValue(selectedDate, selectedTime)}
                </span>
              ) : (
                <span>Tap a date to select</span>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-3.5 py-1.5 bg-[#14120F] hover:bg-[#B08D3F] text-[#E0C068] hover:text-[#14120F] border border-[#B08D3F] rounded text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-1 shrink-0"
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
