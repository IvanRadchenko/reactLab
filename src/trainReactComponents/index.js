import React from "react";
import Box from "./Box";
import Train from "./Train.css";
import StopWatch from "./StopWatch";

const TrainGround = () => {
  return (
    <>
      {/* <Box /> */}
      <StopWatch running={false} lapse={10} />
    </>
  );
};

export default TrainGround;
