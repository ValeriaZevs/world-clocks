import React, { useEffect, useState } from 'react';


interface ClockData {
  id: string;
  name: string;
  timezone: number;
}

interface Props {
  clock: ClockData;
  onRemove: (id: string) => void;
}

const WorldClock: React.FC<Props> = ({ clock, onRemove }) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      setTime(new Date(utc + clock.timezone * 3600000));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [clock.timezone]);

  const secondsDeg = time.getSeconds() * 6; 
  const minutesDeg = time.getMinutes() * 6 + time.getSeconds() * 0.1;
  const hoursDeg = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;

  return (
    <div className="clock-wrapper">
      <div className="clock-title">{clock.name}</div>
      <div className="clock-face">
        <div 
          className="hand hour" 
          style={{ transform: `rotate(${hoursDeg}deg)` }} 
        />
        <div 
          className="hand minute" 
          style={{ transform: `rotate(${minutesDeg}deg)` }} 
        />
        <div 
          className="hand second" 
          style={{ transform: `rotate(${secondsDeg}deg)` }} 
        />
      </div>
      <button 
        className="btn-remove" 
        onClick={() => onRemove(clock.id)}
        aria-label="Удалить часы"
      >
        ✕
      </button>
    </div>
  );
};

export default WorldClock;