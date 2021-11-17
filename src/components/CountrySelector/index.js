import React, { useState } from "react";
import country from "country-list-js";
import "./selector.css";
const CountrySelector = ({ value, setValue, label }) => {
  const [con, setCon] = useState(country.names().sort());
  return (
    <div style={{ display: "flex", alignItems: "center" }} className="input-bg">
      <div style={{width:'30%'}}>{label}</div>
      <select
        value={value}
        onChange={(evt) => {
          setValue(evt.target.value);
        }}
      >
        {con.map((entry) => (
          <option>{entry}</option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
