import { useCallback, useEffect, useRef, useState } from "react";

const useCountdownTimer = (seconds) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const initialRef = useRef(null);
  const startCountdown = useCallback(() => {
    console.log("starting...");
    initialRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeLeft]);
  const resetCountdown = useCallback(() => {
    if (initialRef) {
      clearInterval(initialRef.current);
      setTimeLeft(seconds);
    }
  }, [seconds]);

  useEffect(() => {
    if (!timeLeft && initialRef.current) {
      clearInterval(initialRef.current);
    }
  }, [timeLeft, initialRef]);

  return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdownTimer;
