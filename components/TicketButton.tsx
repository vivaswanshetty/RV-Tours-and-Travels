import React from "react";
import Link from "next/link";

interface TicketButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary-gold" | "secondary-outline" | "dark-ticket" | "paper-ticket";
  size?: "sm" | "md" | "lg";
  className?: string;
  isExternal?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  ticketCode?: string;
  disabled?: boolean;
}

export default function TicketButton({
  children,
  href,
  onClick,
  variant = "primary-gold",
  size = "md",
  className = "",
  isExternal = false,
  type = "button",
  icon,
  ticketCode,
  disabled = false,
}: TicketButtonProps) {
  const sizeStyles = {
    sm: "px-3 py-1.5 text-[11px] sm:text-xs min-h-[36px]",
    md: "px-3.5 sm:px-5 py-2.5 text-xs sm:text-sm min-h-[42px] sm:min-h-[44px]",
    lg: "px-4 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base min-h-[46px] sm:min-h-[52px]",
  }[size];

  const variantStyles = {
    "primary-gold": "bg-gradient-to-br from-[#1C1812] to-[#0F0D0A] text-[#F6F3EC] border border-[#B08D3F] hover:border-[#E0C068] hover:shadow-[0_8px_25px_rgba(176,141,63,0.35)]",
    "secondary-outline": "bg-transparent text-[#14120F] border border-[#B08D3F]/70 hover:border-[#B08D3F] hover:bg-[#B08D3F]/10 hover:shadow-[0_4px_16px_rgba(176,141,63,0.15)]",
    "dark-ticket": "bg-[#181510] text-[#F6F3EC] border border-[#383229] hover:border-[#B08D3F] hover:bg-[#221D16] hover:shadow-[0_6px_20px_rgba(0,0,0,0.6)]",
    "paper-ticket": "bg-[#EFEAE0] text-[#14120F] border border-[#B08D3F]/50 hover:border-[#B08D3F] hover:bg-[#E8E1D2] hover:shadow-[0_4px_16px_rgba(176,141,63,0.2)]",
  }[variant];

  const content = (
    <span className="relative z-10 flex items-center justify-between gap-2 sm:gap-3 w-full font-mono uppercase font-bold tracking-wider overflow-hidden">
      {/* Left / Main Stub Body */}
      <span className="flex items-center gap-2 truncate">
        {icon && <span className="shrink-0">{icon}</span>}
        <span className="truncate tracking-wide">{children}</span>
      </span>

      {/* Ticket Perforation & Stub Code (if provided or implicit) */}
      {ticketCode && (
        <span className="hidden xs:flex items-center gap-1.5 sm:gap-2.5 pl-2 sm:pl-2.5 border-l border-dashed border-[#B08D3F]/50 text-[10px] sm:text-xs text-[#E0C068] tracking-widest shrink-0 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B6B] shrink-0" />
          <span className="whitespace-nowrap">{ticketCode}</span>
        </span>
      )}
    </span>
  );

  // Authentic Ticket Stub Base: Perforation Notches + Subtle Lift on Hover
  const baseClasses = `
    group relative inline-flex items-center justify-center rounded-lg
    transition-all duration-200 ease-out
    hover:-translate-y-0.5
    active:translate-y-0
    cursor-pointer overflow-hidden max-w-full shrink-0
    ${disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : ""}
    ${sizeStyles} ${variantStyles} ${className}
  `;

  // Decorative Notch Elements (Left & Right Top/Bottom Cutouts)
  const decorativeNotches = (
    <>
      <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F6F3EC] dark:bg-[#14120F] border-r border-[#B08D3F]/60 pointer-events-none" />
      <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F6F3EC] dark:bg-[#14120F] border-l border-[#B08D3F]/60 pointer-events-none" />
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {decorativeNotches}
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {decorativeNotches}
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {decorativeNotches}
      {content}
    </button>
  );
}
