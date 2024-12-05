import React from "react";
import Error from "./Error";

export const Input = ({
  children,
  inputType,
  handleChange,
  values,
  errors,
  name,
}) => {
  if (inputType === "checkbox") {
    return (
      <>
        {" "}
        <input type={inputType} id={name} name={name} onChange={handleChange} />
        <label htmlFor={name} id={name}>
          {children}
        </label>
      </>
    );
  } else {
    return (
      <>
        {" "}
        <label htmlFor={name} id={name}>
          {children}
        </label>
        <input
          type={inputType}
          id={name}
          name={name}
          onChange={handleChange}
          value={values[name]}
        />
        {errors[name] && <Error errorMessage={errors[name]} />}
      </>
    );
  }
};
