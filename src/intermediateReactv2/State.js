import React, { useState } from "react";

const State = () => {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useState Color
      </h1>
    </div>
  );
};

export default State;
