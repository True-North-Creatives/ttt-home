import React, { useState } from "react";
import {
  SubcriptionCards,
  SubcriptionAmount,
  SubcriptionPlan,
  Heading,
  Symbol,
  SymbolPrice,
  Desc,
  PromotiomBadge,
  Summary,
  StrikeThrough,
  Aligner,
} from "./Subscription.styled";
import "./RadioBtn.css";

const MONTH = 1;
const YEARLY = 2;

const Subscription = ({ setChoice }) => {
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
    <>
      <Heading>Choose a subscription</Heading>
      <Aligner>
        <SubcriptionCards
          onClick={() => selectSubscription(MONTH)}
          color="dark"
          slim={true}
        >
          <SubcriptionPlan>
            {/* <div> */}
            <input
              className="inp-cbx"
              id="month"
              type="radio"
              name="subscription"
              style={{ display: "none" }}
              onChange={(e) => setMonthly(e.target.checked)}
              checked={month}
            />
            <label className="cbx" for="month">
              <span>
                <svg width="12px" height="9px" viewbox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
              </span>
              <span>Monthly Plan</span>
            </label>
            {/* </div> */}
          </SubcriptionPlan>
          <SymbolPrice slim={true}>
            <SubcriptionAmount>
              <Symbol>₹</Symbol>
              99
            </SubcriptionAmount>
          </SymbolPrice>
        </SubcriptionCards>
        <SubcriptionCards
          onClick={() => selectSubscription(YEARLY)}
          color="dark"
          slim={true}
        >
          <SubcriptionPlan>
            <input
              className="inp-cbx"
              id="year"
              type="radio"
              name="subscription"
              style={{ display: "none" }}
              checked={year}
              onChange={(e) => setYearly(e.target.checked)}
            />
            <label className="cbx" for="year">
              <span>
                <svg width="12px" height="9px" viewbox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
              </span>
              <span>Yearly plan</span>
            </label>
          </SubcriptionPlan>
          <SymbolPrice slim={true}>
            <SubcriptionAmount>
              <Symbol>₹</Symbol>
              999
            </SubcriptionAmount>
          </SymbolPrice>
        </SubcriptionCards>
      </Aligner>
    </>
  );
};

export default Subscription;
