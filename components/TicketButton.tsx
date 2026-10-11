import React from "react";
import Link from "next/link";

interface TicketButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary-gold" | "secondary-outline" | "dark-ticket" | "paper-ticket" | "whatsapp-green";
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
    "primary-gold":
      "bg-gradient-to-br from-[#1F1A13] to-[#120F0C] text-[#F6F3EC] border border-[#B08D3F] hover:border-[#E0C068] hover:text-white hover:shadow-[0_8px_25px_rgba(176,141,63,0.4)]",
    "secondary-outline":
      "bg-white/[0.08] text-[#F6F3EC] border border-[#B08D3F]/80 hover:border-[#E0C068] hover:bg-[#B08D3F]/20 hover:text-white hover:shadow-[0_4px_16px_rgba(176,141,63,0.25)]",
    "dark-ticket":
      "bg-[#181510] text-[#F6F3EC] border border-[#383229] hover:border-[#B08D3F] hover:text-[#E0C068] hover:bg-[#221D16] hover:shadow-[0_6px_20px_rgba(0,0,0,0.6)]",
    "paper-ticket":
      "bg-[#EFEAE0] text-[#14120F] border border-[#B08D3F] hover:border-[#14120F] hover:bg-[#E8E1D2] hover:shadow-[0_4px_16px_rgba(176,141,63,0.2)]",
    "whatsapp-green":
      "bg-gradient-to-r from-[#1FAF55] via-[#25D366] to-[#128C7E] text-white border border-[#25D366]/40 hover:border-[#38ef7d] hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)]",
  }[variant];

  const notchBg = variant === "paper-ticket" ? "bg-[#EFEAE0]" : "bg-[#14120F]";

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-2.5 w-full font-body font-semibold text-xs sm:text-sm tracking-wide">
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="tracking-wide text-current">{children}</span>
    </span>
  );

  const baseClasses = `
    group relative inline-flex items-center justify-center rounded-lg
    transition-all duration-200 ease-out
    hover:-translate-y-0.5
    active:translate-y-0
    cursor-pointer overflow-hidden max-w-full shrink-0
    ${disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : ""}
    ${sizeStyles} ${variantStyles} ${className}
  `;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
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
      {content}
    </button>
  );
}
