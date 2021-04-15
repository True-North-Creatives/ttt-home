import React from "react";
import "./breadcrumbs.css";

export default ({ activeMap }) => {
  const initState = {
    home: -1,
    account: -1,
    subscription: 0,
    payment: 1,
    start: 1,
    ...activeMap,
  };
  // const [state, setState] = useState(initState);
  const getStatus = (status) => {
    switch (status) {
      case 0:
        return "highlight";
      case -1:
        return "done";
      default:
        return "";
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <ul id="breadcrumb">
        <li className="mobile-hide small-mobile-hide">
          <div>
            <span className="icon icon-home"> </span>{" "}
            <span className={getStatus(initState.home)}>Home</span>
          </div>
        </li>
        <li
          className={`${
            getStatus(initState.account) === "highlight"
              ? "hightlight"
              : "small-mobile-hide"
          }`}
        >
          <div>
            <span className="icon-user"> </span>{" "}
            <span className={getStatus(initState.account)}>Account</span>
          </div>
        </li>
        <li
          className={`${
            getStatus(initState.subscription) === "highlight"
              ? "hightlight"
              : "small-mobile-hide"
          }`}
        >
          <div>
            <span className="icon icon-double-angle-right highlight"></span>{" "}
            <span className={getStatus(initState.subscription)}>
              Subcription
            </span>
          </div>
        </li>
        <li
          className={`${
            getStatus(initState.payment) === "highlight"
              ? "hightlight"
              : "small-mobile-hide"
          }`}
        >
          <div>
            <span className="icon-money"> </span>{" "}
            <span className={getStatus(initState.payment)}>Payment</span>
          </div>
        </li>
        <li className="mobile-hide small-mobile-hide">
          <div>
            <span className="icon icon-rocket"> </span>{" "}
            <span className={getStatus(initState.start)}>Getting started</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
