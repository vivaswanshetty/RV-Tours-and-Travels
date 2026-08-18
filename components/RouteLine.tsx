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
  { id: "services", number: "02", name: "SERVICES", topPct: 0.22 },
  { id: "fleet", number: "03", name: "FLEET", topPct: 0.40 },
  { id: "packages", number: "04", name: "PACKAGES", topPct: 0.58 },
  { id: "about", number: "05", name: "OPERATOR", topPct: 0.76 },
  { id: "contact", number: "06", name: "DISPATCH", topPct: 0.94 },
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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Trigger waypoint when the section top reaches upper 40% of viewport
          const scrollFocalPoint = window.scrollY + window.innerHeight * 0.4;
          
          let currentWaypoint = "01";

          for (let i = 0; i < WAYPOINTS.length; i++) {
            const section = document.getElementById(WAYPOINTS[i].id);
            if (section) {
              const sectionTop = section.offsetTop;
              if (scrollFocalPoint >= sectionTop) {
                currentWaypoint = WAYPOINTS[i].number;
              }
            }
          }

          setActiveWaypoint(currentWaypoint);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
