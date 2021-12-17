import React from "react";
import {Box, TextField, Button} from "@material-ui/core";
import "./sign_style.css";

export const Signupmain=()=>{
    return(
        <div>
            <div className="signupmain_lay">
                <div className="insta_title"></div>
                <div className="from">Sign up to see photos and videos from your friends</div>
                <div className="face1">
                    <div className="face_logo1"><img src="https://raw.githubusercontent.com/sailuchandragiri/sailuchandragiri/d1cae0e695c1cc14ecd879bdcff140fd9f9bcf1a/Project/Vector.svg"></img></div>
                    <div className="face_text1">Log in with Facebook</div>
                </div>
                <div className="below">
                    <div className="line1"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/line.png?raw=true"></img></div>
                    <div className="or">OR</div>
                    <div className="line2"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/line.png?raw=true"></img></div>
                </div>
                <Box>
                    <TextField  className="phonenumber" margin="dense" variant="outlined" label="Mobile Number or Email"/>
                </Box>
                <Box>
                    <TextField  className="phonenumber" margin="dense" variant="outlined" label="Full Name"/>
                </Box>
                <Box>
                    <TextField  className="phonenumber" margin="dense" variant="outlined" label="Username"/>
                </Box>
                <Box>
                    <TextField  className="phonenumber" margin="dense" variant="outlined" label="Password"/>
                </Box>
                <div className="log_btn">
                      <div className="log_title1">Sign up</div>
                </div>
                <div className="terms">By signing up, you agree to our Terms, Data Policy and Cookies Policy.</div>

            </div>
            
        </div>
    );
}


