"use client";

import React from "react";
import TicketButton from "./TicketButton";
import { openTripBookingModal } from "./StickyQuoteTab";

interface TripEnquiryButtonProps {
  destination?: string;
  interest?: string;
  vehicle?: string;
  children: React.ReactNode;
  variant?: "primary-gold" | "secondary-outline" | "dark-ticket" | "paper-ticket";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
}

export default function TripEnquiryButton({
  destination,
  interest,
  vehicle,
  children,
  variant = "primary-gold",
  size = "md",
  className = "",
  icon,
}: TripEnquiryButtonProps) {
  return (
    <TicketButton
      onClick={() => openTripBookingModal({ destination, interest, vehicle })}
      variant={variant}
      size={size}
      className={className}
      icon={icon}
    >
      {children}
    </TicketButton>
  );
}
