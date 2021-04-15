import React from "react";
import "./inputBox.css";
const InputBox = ({ value, setValue, label }) => (
  <div style={{ display: "flex", alignItems: "center" }} className="input-bg">
    <div style={{width:'30%'}}>{label}</div>
    <input
      type="text"
      value={value}
      onChange={(evt) => {
        setValue(evt.target.value);
      }}
    />
  </div>
);

export default InputBox;
