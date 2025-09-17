"use client";
import { useTimer } from "react-timer-hook";

export function useCountdownTimer(key, totalSeconds, onComplete) {
  const createExpiry = () => {
    const expiry = new Date();
    expiry.setSeconds(expiry.getSeconds() + totalSeconds);
    localStorage.setItem(key, expiry.toISOString());
    return expiry;
  };

  const getExpiry = () => {
    const stored = localStorage.getItem(key);
    if (stored) {
      const exp = new Date(stored);
      if (exp.getTime() <= Date.now()) {
        // expired → create new expiry
        return createExpiry();
      }
      return exp;
    }
    return createExpiry();
  };

  const expiryTimestamp = getExpiry();

  const { seconds, minutes, restart, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      if (typeof onComplete === "function") onComplete();
    },
  });

  const reset = () => {
    const newExp = createExpiry();
    restart(newExp);
  };

  const timeLeft = minutes * 60 + seconds;

  return { minutes, seconds, timeLeft, reset, isRunning };
}
