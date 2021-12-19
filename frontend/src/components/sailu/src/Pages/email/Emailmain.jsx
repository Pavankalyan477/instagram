import React from "react";
import { Footer } from "../Footer";
import { Getapp } from "../Getapp";
import {Box, TextField, Button} from "@material-ui/core";
import "./em_style.css";
import { Link } from "react-router-dom";

export const Emailmain=()=>{
    return(
        <div>
            <div className="emdiv">
                <div className="emailimg"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/mail.png?raw=true"></img></div>
                <div className="code">Enter Confirmation Code</div>
                <div className="conform">
                    <div className="conf">Enter the confirmation code we sent to</div>
                    <div className="qwe">
                        <div className="abc">malubulu@gmail.com.</div>
                        <div className="bnm">Resend Code</div>
                    </div>
                </div>
                <Box>
                    <TextField  className="phonenumber" margin="dense" variant="outlined" label="Confirmation Code"/>
                </Box>
                <div className="log_btn">
                      <div className="log_title1"> <Link className="link" to="/Suggest">Next</Link> </div>
                </div>
                <div className="goback"> <Link className="link" to="/Birthmain"> Go Back</Link></div>
            </div>
            <Getapp></Getapp>
            <Footer></Footer>
        </div>
    );
}