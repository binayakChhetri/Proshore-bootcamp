import React from "react";
const countries = ["US", "Nepal", "India", "China", "Other"];

export const SelectInput = ({ name, children, values, handleChange }) => {
  return (
    <>
      <label htmlFor="countryName">{children}</label>
      <select
        id={name}
        name={name}
        value={values[name]}
        onChange={handleChange}
      >
        {countries.map((country, index) => (
          <Item key={index} name={country} />
        ))}
      </select>
    </>
  );
};

const Item = ({ name }) => {
  return <option value={name}>{name}</option>;
};
