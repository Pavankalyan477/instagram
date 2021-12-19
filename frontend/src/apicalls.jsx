import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  console.log("userCredentials:", userCredentials);
  let data = userCredentials.state;
  console.log("data:", data);

  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      `http://localhost:3005/api/auth/register`,
      data
    );
    console.log("res:", res);

    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    console.log("err:", err);
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
