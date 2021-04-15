import React, { useState } from "react";
import {Base, Title, Wrapper} from './RadioBtn.styled';
import "./RadioBtn.css";

const MONTH = 1;
const YEARLY = 2;

const RadioButtonGroup = ({ setChoice, label,children }) => {
  const [month, setMonthly] = useState(false);
  const [year, setYearly] = useState(false);
  const selectSubscription = (opt) => {
    if (opt === MONTH) {
      setMonthly(true);
      setYearly(false);
      setChoice(MONTH);
    }
    if (opt === YEARLY) {
      setMonthly(false);
      setYearly(true);
      setChoice(YEARLY);
    }
  };

  return (
    <div
      onClick={() => selectSubscription(MONTH)}
    >
      <Base
        color="dark"
        slim={true}
        accordion={!!children}
      >
        <Wrapper>
          {/* <div> */}
          <input
            className="inp-cbx"
            id={label}
            type="radio"
            name="gateway"
            style={{ display: "none" }}
            onChange={(e) => setMonthly(e.target.checked)}
            checked={month}
          />
          <label className="cbx" htmlFor={label}>
            <span>
              <svg width="12px" height="9px" viewbox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            <Title>{label}</Title>
          </label>
        </Wrapper>
      </Base>
      {children}
    </div>
  );
};

export default RadioButtonGroup;
