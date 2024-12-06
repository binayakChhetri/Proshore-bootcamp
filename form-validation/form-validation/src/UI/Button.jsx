import React from "react";

export const Button = ({ btnType, children, onClick }) => {
  return (
    <button
      style={{ width: "50%" }}
      type={btnType}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};
