"use client";
import React, { useEffect } from "react";
import { usePreloader } from "./preloader";

const AnimatedBackground = () => {
  const { bypassLoading } = usePreloader();

  useEffect(() => {
    bypassLoading();
  }, [bypassLoading]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-gradient-to-b from-[hsl(20,100%,70%)]/10 via-[hsl(30,100%,65%)]/5 to-transparent blur-[120px]" />
    </div>
  );
};

export default AnimatedBackground;
