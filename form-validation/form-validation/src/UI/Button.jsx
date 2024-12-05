import React from "react";

export const Button = ({ btnType, children, resetForm }) => {
  return (
    <button
      type={btnType}
      onClick={() => {
        resetForm();
      }}
    >
      {children}
    </button>
  );
};
