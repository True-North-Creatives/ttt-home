import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Left,
  Right,
  LoginImage,
  NavBar,
  SelectedNavItem,
  FormInput,
  FormWrapper,
  RightWrapper,
  Label,
  ActionButton,
} from "../styles/auth.styled";
import img from "./../assets/img/1.png";
import { useHistory } from "react-router-dom";
import axios from "axios";
const ResetPage = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("loading");
  const [response, setResponse] = useState({});
  /**
   * @todo
   * failed case
   */
  useEffect(() => {
    axios
      .get(`../api/v2/auth/reset/${props.match.params.secret}`, {
        validateStatus: (status) => status <= 500,
      })
      .then((result) => setResponse(result))
      .catch((err) => setResponse(err));
  }, [props.match.params.secret]);

  useEffect(() => {
    const { data, status } = response;
    status === 200 && data.result && setEmail(data.email);
    if (status !== 200 && data) {
      alert(data.error.message);
    }
  }, [response]);
  const [pass, setPass] = useState("");

  const setPassword = async () => {
    const {data, status} = await axios.patch(`../api/v2/auth/update`, {
      token: props.match.params.secret,
      pass,
    });
    if(status !== 200) {
        alert(data.error.message);
    }
    /**
     * @todo
     * notify that you are redirecting to login page
     */
    data.updated && history.push("/");
  };
  return (
    <Wrapper>
      <Left>
        <LoginImage alt="login img" src={img}></LoginImage>
      </Left>
      <Right>
        <RightWrapper>
          <NavBar>
            <SelectedNavItem onTouchCancelCapture="/reset">
              Set Password
            </SelectedNavItem>
          </NavBar>
          <Label>Your Email</Label>
          <FormWrapper>
            <FormInput
              placeholder={email}
              value={props.match.params.email}
              disabled
            />
            <FormInput
              placeholder="password"
              value={pass}
              type="password"
              onChange={(event) => setPass(event.target.value)}
            />
          </FormWrapper>
          <ActionButton onClick={setPassword}>Set Password</ActionButton>
        </RightWrapper>
      </Right>
    </Wrapper>
  );
};

export default ResetPage;
