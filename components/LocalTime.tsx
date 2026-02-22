"use client";
import { useEffect, useState } from "react";

export const LocalTime = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Set time immediately and then every second
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex font-mono tracking-tighter uppercase">
      <span className="text-stone-400">LOCAL/</span>
      <span className="text-white">{time || "00:00:00"}</span>
    </div>
  );
};