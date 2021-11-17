import React, { useState } from "react";
import Subscription from "../../components/Subscription";
import {
  Layout,
  Disclaimer,
  PaymentBtn,
  PayLogos,
  ImgTray,
  Logo,
} from "./subscription.styled";
import Breadcrumbs from "../../components/Breadcurmbs";
const Payment = () => {
  const activeMap = {
    home: -1,
    account: -1,
    subscription: 0,
    payment: 0,
    start: 0,
  };
  const [choice, setChoice] = useState(undefined);
  return (
    <>
      <Layout />
      <Logo src="logo.png" />
      <Breadcrumbs activeMap={activeMap} />
      <Subscription setChoice={setChoice} />
      <Disclaimer>No hidden fees</Disclaimer>
      <PaymentBtn to="/payment" choice={choice}>
        Continue to Payment
      </PaymentBtn>
      <ImgTray>
        <PayLogos src="visa.png" alt="visa" />
        <PayLogos src="master.svg" alt="master" />
        <PayLogos src="gpay.svg" alt="gpay" />
        <PayLogos src="paypal.svg" alt="paypal" />
        <PayLogos src="upi.svg" alt="upi" />
      </ImgTray>
    </>
  );
};

export default Payment;
