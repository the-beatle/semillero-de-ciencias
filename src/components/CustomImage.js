import React from "react";

const CustomImage = ({ src }) => {
  return (
    <image>
      <img src={src} alt="new" width={"100%"} height={"auto"} />
    </image>
  );
};

export default CustomImage;

