import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return (
    <div className="text-4xl font-bold text-center mt-8">
      <span>{formatTime(hours)}</span>
      <span className="text-xs text-gray-600">H</span>
      {" : "}
      <span>{formatTime(minutes)}</span>
      <span className="text-xs text-gray-600">M</span>
      {" : "}
      <span>{formatTime(seconds)}</span>
      <span className="text-xs text-gray-600">S</span>
    </div>
  );
};

export default Timer;

