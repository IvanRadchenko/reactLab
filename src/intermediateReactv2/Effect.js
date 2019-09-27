import React, { useState, useEffect } from "react";

const Effect = () => {
  const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const timer = setTimeout(setTime(new Date()), 1000);
  //   return () => clearTimeout(timer);
  // }, [time, setTime]);

  return (
    <div>
      <h1>useEffect Example: {time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Effect;
