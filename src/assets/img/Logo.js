import React from "react";

const Logo = ({ color = "#F28B63" }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.1604 15.7781C14.7489 23.6431 8.13417 29.9085 0 30V0C8.13417 0.0915699 14.7489 6.35689 15.1604 14.2219C15.5665 6.46058 22.0134 0.257038 30 0.00686193V29.9933C22.0134 29.7431 15.5665 23.5395 15.1604 15.7781Z"
        fill={color}
      />
    </svg>
  );
};

export default Logo;
