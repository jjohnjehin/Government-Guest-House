import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const Counttimer= () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes = 120 seconds

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <Typography color='error'>
      {formatTime(timeLeft)}
    </Typography>
  );
};

export default Counttimer;
