import React from "react";
import "./sailu_style.css";
import { makeStyles } from "@material-ui/core/styles"; 
import {Box, TextField, Button} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({ noBorder: { border: "none", }, }));
export const Home = () => {

    return(
        <>
        <div className="main_lay">
          <div className="left">
              <img className="logo" src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/logo.png?raw=true" height="164px" width="109px"></img>
          </div>
          <div className="right">
              <div className="up">
                  <div className="insta_title"></div>
                  <Box >
                      <TextField  className="phonenumber" margin="dense" variant="outlined" label="Phonenumber, username or email"><button>pavan</button></TextField>
                  </Box>
                  <Box>
                      <TextField  className="password" margin="dense" variant="outlined" label="Password"></TextField>
                  </Box>
                  <div className="log_btn">
                      <div className="log_title"> <Link to="/Suggest"> Log In</Link> </div>
                  </div>
                  <div className="below">
                    <div className="line1"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/line.png?raw=true"></img></div>
                    <div className="or">OR</div>
                    <div className="line2"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/line.png?raw=true"></img></div>
                  </div>
                  <div className="face">
                        <div className="face_logo"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/fbicon.png?raw=true"></img></div>
                        <div className="face_text">Login with Facebook</div>
                  </div>
                  <div className="for">Forgot password?</div>

              </div>
              <div className="down">
                  <div className="account">Don't have an account?</div>
                  <div className="siup"> <Link to="/Signup_page">Sign up</Link> </div>
              </div>
              <div className="text">Get the app</div>
              <div className="pics">
                  <div className="pic1"></div>
                  <div className="pic2"></div>
              </div>
          </div>
        </div>
        <div>
            <div className="top_foot1">
                <div>Meta</div>
                <div>About</div>
                <div>Blog</div>
                <div>Jobs</div>
                <div>Help</div>
                <div>API</div>
                <div>Privacy</div>
                <div>Terms</div>
                <div>Top Accounts</div>
                <div>Hashtags</div>
                <div>Locations</div>
                <div>Instagram Lite</div>
            </div>
            <div className="down_foot1">
                <div>Beauty</div>
                <div>Dance</div>
                <div>Fitness</div>
                <div>Food & Drink</div>
                <div>Home & Garden</div>
                <div>Music</div>
                <div>Visual Arts</div>
            </div>
            <div className="downfoo">
                <div>English</div>
                <div>@ 2021 Instagram from Meta</div>
            </div>
            
        </div>
       </>
    );
}