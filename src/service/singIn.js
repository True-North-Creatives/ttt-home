import axios from "axios";

export const signIn = async (payload) => {
  const {data, status} = await axios.post(
    `/api/v2/auth/signin`,
    { ...payload },
    { withCredentials: true, validateStatus: (status) => status <= 500 }
  );
  // console.log(data, "signIn", status);
  // if (status === 200 && data.error && data.error.code === 101) {
  //   //account doesn't exist, registering it
  //   signUp(payload);
  //   return;
  // }
  if(status !== 200) {
    alert(data.error.message);
    return;
  }
  if (status === 200 && data.code === 'AUTH-103') {
    window.location.href = `/subscription`;
    return;
  }
  //after signin take to app
  window.location.href = `http://app.timetotrain.fit`;
};

export const signUp = async (payload) => {
  const res = await axios.post(
    `/api/v2/auth/signup`,
    { ...payload },
    { withCredentials: true, validateStatus: (status) => status <= 500 }
  );
  console.log(res.data, "signIn");
  if (
    res.status === 400 &&
    res.data.message &&
    res.data.message === "Email already taken"
  ) {
    //account already exist, logining in now
    signIn(payload);
    return;
  }
  //after signup take to subscription page
  window.location.href = `/subscription`;
};

export const emailAuthSignUp = async (email) => {
  if (email === "") {
    return;
  }
  const { data, status } = await axios.post(
    `/api/v2/auth/signup`,
    {
      email,
      providerId: "EMAIL",
    },
    { withCredentials: true, validateStatus: (status) => status <= 500 }
  );
  if (status !== 200) return { error: data };
  window.location.href = `/subscription`;
};

export const emailAuthSingIn = async (email, pass) => {
  if (email === "" || pass === "") {
    return;
  }
  const { data, status } = await axios.post(
    `/api/v2/auth/signin`,
    { email, pass },
    { withCredentials: true, validateStatus: (status) => status <= 500 }
  );
  console.log(data, "signIn");
  if (status === 200) {
    window.location.href = `${process.env.REACT_APP_USER_APP}`;
    return;
  }
  if(status === 307) {
    alert(data.error.message)
    window.location.href = `/subscription`;
    return;
  }
  alert(data.error.message)
};
