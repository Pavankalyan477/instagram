import React from "react";
import { Footer } from "../Footer";
import { Getapp } from "../Getapp";
import {Box, TextField, Button} from "@material-ui/core";
import "./sign_style.css";
import { Link } from "react-router-dom";

export const Birthmain=()=>{
    return(
        <div>
            <div className="email_lay">
                <div className="cake">
                    <img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/Cake.png?raw=true"></img>
                </div>
                
                <div className="addbirth">Add Your Birthday</div>
                <div className="pbpro">This wont be a part of your public profile</div>
                <div className="bd">why do I need to provide my birthday?</div>
                <Box>
                     <TextField className="password" margin="dense" variant="outlined" label="DD/MM/YYYY"  min="6"></TextField>
                </Box>
                <div className="terms1">Use your own birthday, even if this account is for a business, a pet, or something else.</div>
                <div className="log_btn">
                      <div className="log_title1"><Link className="link" to="/Email">  Next</Link></div>
                </div>
                <div className="goback" > <Link className="link" to="/Signup_page"> Go Back</Link> </div>
            </div>
           
            <Getapp></Getapp>
            <Footer></Footer>
        </div>
    );
}