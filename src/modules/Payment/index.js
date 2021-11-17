import React, { useState } from "react";
import SlimSubscription from "../../components/Subscription/slim";
import {
  Layout,
  PaymentBtn,
  PayLogos,
  ImgTray,
  Logo,
  Container,
  CardDetailsBase,
  CardDetailsEntries,
  CardDetailsLabel,
  CardDetailsValue
} from "./payment.styled";
import Breadcrumbs from "../../components/Breadcurmbs";
import InputBox from "../../components/InputBox";
import CountrySelector from "../../components/CountrySelector";
import RadioButtonGroup from "../../components/RadioButtonGroup";
const Payment = () => {
  const activeMap = {
    home: -1,
    account: -1,
    subscription: -1,
    payment: 0,
    start: 1,
  };
  const [choice, setChoice] = useState(undefined);
  const [payChoice, setPayChoice] = useState(undefined);
  const [username, setUserName] = useState("");

  return (
    <>
      <Layout />
      <Container>
        <Logo src="logo.png" />
        <Breadcrumbs activeMap={activeMap} />
        <SlimSubscription setChoice={setChoice} />
        <InputBox label="Username" value={username} setValue={setUserName} />
        <CountrySelector
          label="Country"
          value={username}
          setValue={setUserName}
        />
        <RadioButtonGroup setChoice={setPayChoice} label="Paypal" />
        <RadioButtonGroup setChoice={setPayChoice} label="Debit/Credit Card">
          <CardDetailsBase>
            <CardDetailsEntries>
              <CardDetailsLabel>Card Holder Name</CardDetailsLabel>
              <CardDetailsValue />
            </CardDetailsEntries>
            <CardDetailsEntries>
              <CardDetailsLabel>Card Number</CardDetailsLabel>
              <CardDetailsValue />
            </CardDetailsEntries>
            <div style={{display:'flex', overflow: 'hidden'}}>
            <CardDetailsEntries>
              <CardDetailsLabel>Expiry</CardDetailsLabel>
              <CardDetailsValue />
            {/* </CardDetailsEntries>
            <CardDetailsEntries> */}
              <CardDetailsLabel>CVV</CardDetailsLabel>
              <CardDetailsValue />
            </CardDetailsEntries>
            </div>
          </CardDetailsBase>
        </RadioButtonGroup>
        <RadioButtonGroup setChoice={setPayChoice} label="UPI" />
        <PaymentBtn to="/payment">Pay</PaymentBtn>
        <ImgTray>
          <PayLogos src="visa.png" alt="visa" />
          <PayLogos src="master.svg" alt="master" />
          <PayLogos src="gpay.svg" alt="gpay" />
          <PayLogos src="paypal.svg" alt="paypal" />
          <PayLogos src="upi.svg" alt="upi" />
        </ImgTray>
      </Container>
    </>
  );
};

export default Payment;
