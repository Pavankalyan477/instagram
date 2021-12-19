import React, { useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import "./sign_style.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useHistory } from "react-router";
import { axios } from "axios";
import { Redirect } from "react-router-dom";

export const Signupmain = () => {
  const [state, setState] = useState({
    username: " ",
    email: " ",
    password: " ",
  });
  const [isAuth, setIsAuth] = useState(false);

  const postData = async () => {
    if (
      state.username === " " ||
      state.email === " " ||
      state.password === " "
    ) {
      setIsAuth(isAuth)
      // Redirect('/Signup_page')
      return (
        alert("Invalid credentials, please try agai")
      );
    } else {
      setIsAuth(!isAuth);
      try {
        let res = await axios.post(
          "http://localhost:3005/api/auth/register",
          state
        );
       
        console.log("res:", res);
        // history.push("/Birthday");
      } catch (err) {
        console.log("err:", err);
      }
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    postData();
  };
  console.log("form", state);
  const handlechange = (e) => {
    const { name, value } = e.target;

    let data = {
      ...state,
      [name]: value,
    };
    setState(data);
  };

  return (
    <div>
      <div className="signmain_lay">
        <div className="insta_title_sign"></div>
        <div className="from1">
          Sign up to see photos and videos from your friends
        </div>
        <div className="face1_logo">
          <div className="face1_logo1">
            <img
              src="https://raw.githubusercontent.com/sailuchandragiri/sailuchandragiri/d1cae0e695c1cc14ecd879bdcff140fd9f9bcf1a/Project/Vector.svg"
              alt="pava"
            ></img>
          </div>
          <div className="face1_text1">Log in with Facebook</div>
        </div>
        <div className="below">
          <div className="line1">
            <img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/line.png?raw=true"></img>
          </div>
          <div className="or">OR</div>
          <div className="line2">
            <img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/line.png?raw=true"></img>
          </div>
        </div>

        <Box>
          <TextField
            onChange={handlechange}
            name="email"
            className="phonenumber"
            margin="dense"
            variant="outlined"
            label="Mobile Number or Email"
          />
        </Box>
        <Box>
          <TextField
            className="phonenumber"
            margin="dense"
            variant="outlined"
            label="Full Name"
          />
        </Box>
        <Box>
          <TextField
            onChange={handlechange}
            name="username"
            className="phonenumber"
            margin="dense"
            variant="outlined"
            label="Username"
          />
        </Box>
        <Box>
          <TextField
            onChange={handlechange}
            name="password"
            className="phonenumber"
            margin="dense"
            variant="outlined"
            label="Password"
          />
        </Box>
        <div className="log_btn">
          <div className="log_title1" type="submit" onClick={handleSignup}>
            <Link to={!isAuth?"/Signup_page": "/Birthday"}>Sign up</Link>
          </div>
        </div>

        <div className="terms11">
          By signing up, you agree to our Terms, Data Policy and Cookies Policy.
        </div>
      </div>
    </div>
  );
};
