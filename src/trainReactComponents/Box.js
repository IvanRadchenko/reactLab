import React from "react";

const Box = ({ style, size, className = "", ...rest }) => {
  const sizeClassName = size ? `box--${size}` : "";
  return (
    <>
      <p
        className={`box ${className} ${sizeClassName}`}
        style={{ paddingLeft: 20, ...style }}
        {...rest}
      ></p>
    </>
  );
};

const RenderBoxes = () => {
  return (
    <>
      <Box size="small" style={{ backgroundColor: "lightblue" }}>
        {" "}
        small box
      </Box>
      <Box size="medium" style={{ backgroundColor: "lightyellow" }}>
        {" "}
        medium box
      </Box>
      <Box size="large" style={{ backgroundColor: "lightgreen" }}>
        {" "}
        large box
      </Box>
    </>
  );
};
export default RenderBoxes;
