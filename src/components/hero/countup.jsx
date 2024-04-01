import React, { useState, useEffect } from 'react';

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const timePassed = now - startTime;
      const progress = timePassed / duration;

      if (progress < 1) {
        const currentValue = Math.round(progress * end);
        setCount(currentValue);
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(updateCount);
  }, [end, duration]);

  return <div>{count}</div>;
};

export default CountUp;
