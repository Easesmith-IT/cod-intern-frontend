"use client";

import React, { useEffect, useRef } from "react";
import { useTimer } from "react-timer-hook";

export const Counter = () => {
  const intervalRef = useRef(null);
  const durationInSeconds = 6 * 24 * 60 * 60;

 const getExpiryTime = () => {
   const time = new Date();
   time.setSeconds(time.getSeconds() + durationInSeconds); // 6 days in seconds
   return time;
 };


  const { seconds, minutes, hours, days, restart } = useTimer({
    expiryTimestamp: getExpiryTime(),
    autoStart: true,
  });

  useEffect(() => {
    // Set interval to restart timer every 10s
    intervalRef.current = setInterval(() => {
      restart(getExpiryTime());
    }, durationInSeconds);

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
