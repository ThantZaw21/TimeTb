import { useState, useEffect } from "react";

function DateTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  // Format time: 12-hour, minutes, and seconds with "s"
  const hoursMinutes = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const seconds = String(time.getSeconds()); // always 2 digits

  return (
    <div className=" text-sm text-white/70">
      {hoursMinutes} {seconds}s
    </div>
  );
}

export default DateTime;
