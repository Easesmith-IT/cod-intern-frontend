"use client";
import { useTimer } from "react-timer-hook";
import { useEffect, useState } from "react";

export function useCountdownTimer(key, totalSeconds, onComplete) {
  const [expiryTimestamp, setExpiryTimestamp] = useState(() => {
    // fallback expiry so useTimer has something on first render
    const fallback = new Date();
    fallback.setSeconds(fallback.getSeconds() + totalSeconds);
    return fallback;
  });

  useEffect(() => {
    const createExpiry = () => {
      const expiry = new Date();
      expiry.setSeconds(expiry.getSeconds() + totalSeconds);

      if (typeof window !== "undefined") {
        localStorage.setItem(key, expiry.toISOString());
      }
      return expiry;
    };

    const getExpiry = () => {
      if (typeof window === "undefined") return createExpiry();

      const stored = localStorage.getItem(key);
      if (stored) {
        const exp = new Date(stored);
        if (exp.getTime() > Date.now()) {
          return exp; // still valid → reuse
        }
        // expired → clear it
        localStorage.removeItem(key);
      }
      return createExpiry();
    };

    setExpiryTimestamp(getExpiry());
  }, [key, totalSeconds]);

  const { seconds, minutes, restart, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem(key); // ✅ always clear when done
      }
      if (typeof onComplete === "function") onComplete();
    },
  });

  const reset = () => {
    const newExp = new Date();
    newExp.setSeconds(newExp.getSeconds() + totalSeconds);

    if (typeof window !== "undefined") {
      localStorage.removeItem(key); // ✅ clear old first
      localStorage.setItem(key, newExp.toISOString()); // ✅ store new
    }

    restart(newExp);
  };

  const timeLeft = minutes * 60 + seconds;

  return { minutes, seconds, timeLeft, reset, isRunning };
}
