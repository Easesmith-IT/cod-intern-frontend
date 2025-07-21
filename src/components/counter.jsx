"use client";

import React, { useEffect, useRef } from "react";
import { useTimer } from "react-timer-hook";

const EXPIRY_KEY = "countdownExpiry";
const durationInSeconds = 6 * 24 * 60 * 60; // 6 days

export const Counter = () => {
  const intervalRef = useRef(null);

  const createNewExpiry = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + durationInSeconds);
    localStorage.setItem(EXPIRY_KEY, time.toISOString());
    return time;
  };

  const getExpiryTime = () => {
    const stored = localStorage.getItem(EXPIRY_KEY);
    const expiry = stored ? new Date(stored) : createNewExpiry();

    if (expiry.getTime() < new Date().getTime()) {
      return createNewExpiry();
    }

    return expiry;
  };

  const { seconds, minutes, hours, days, restart } = useTimer({
    expiryTimestamp: new Date(),
    autoStart: true,
  });

  useEffect(() => {
    const expiry = getExpiryTime();
    restart(expiry);

    intervalRef.current = setInterval(() => {
      const newExpiry = createNewExpiry();
      restart(newExpiry);
    }, durationInSeconds * 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [restart]);

  const format = (n) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center font-stolzl">
      <div className="flex justify-center border w-8 h-8 rounded items-center p-2">
        {format(days)}
      </div>
      <p className="px-2">:</p>
      <div className="flex justify-center border w-8 h-8 rounded items-center p-2">
        {format(hours)}
      </div>
      <p className="px-2">:</p>
      <div className="flex justify-center border w-8 h-8 rounded items-center p-2">
        {format(minutes)}
      </div>
      <p className="px-2">:</p>
      <div className="flex justify-center border w-8 h-8 rounded items-center p-2">
        {format(seconds)}
      </div>
    </div>
  );
};
