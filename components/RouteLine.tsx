"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

interface RouteWaypoint {
  id: string;
  number: string;
  name: string;
  topPct: number; // approximate waypoint vertical stop
}

const WAYPOINTS: RouteWaypoint[] = [
  { id: "overview", number: "01", name: "ORIGIN", topPct: 0.05 },
  { id: "services", number: "02", name: "SERVICES", topPct: 0.28 },
  { id: "fleet", number: "03", name: "FLEET", topPct: 0.52 },
  { id: "about", number: "04", name: "OPERATOR", topPct: 0.74 },
  { id: "contact", number: "05", name: "DISPATCH", topPct: 0.95 },
];

export default function RouteLine() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeWaypoint, setActiveWaypoint] = useState("01");

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const match = WAYPOINTS.find((w) => w.id === id);
          if (match) {
            setActiveWaypoint(match.number);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.1,
    });

    WAYPOINTS.forEach((w) => {
      const el = document.getElementById(w.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="hidden xl:block fixed left-6 top-32 bottom-24 z-30 pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative h-full flex flex-col items-center">
        {/* Top Origin Node */}
        <div className="w-5 h-5 rounded-full bg-[#14120F] border-2 border-[#B08D3F] flex items-center justify-center shadow-md">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
        </div>

        {/* Background Track Line */}
        <div className="w-0.5 flex-1 bg-[#DCD4C4]/60 relative my-2">
          {/* Animated Active Route Fill Line */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="w-full h-full bg-[#B08D3F] shadow-[0_0_8px_rgba(176,141,63,0.6)]"
          />
        </div>

        {/* Bottom Destination Node */}
        <div className="w-5 h-5 rounded-full bg-[#1F4C4C] border-2 border-[#B08D3F] flex items-center justify-center shadow-md">
          <div className="w-1.5 h-1.5 rounded-full bg-[#F6F3EC]" />
        </div>

        {/* Waypoint Indicator Tag Pill */}
        <div className="mt-3 px-2 py-1 bg-[#14120F] border border-[#B08D3F] rounded text-[10px] font-mono text-[#E0C068] tracking-widest uppercase flex flex-col items-center">
          <span className="text-[#B08D3F] text-[8px]">WP</span>
          <span className="font-bold">{activeWaypoint}</span>
        </div>
      </div>
    </div>
  );
}
