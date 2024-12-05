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
  console.log(children);
  console.log(inputType, values, errors);
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
};
