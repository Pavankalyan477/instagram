import React from "react";
import { Footer } from "../Footer";
import { Getapp } from "../Getapp";
import { Signupmain } from "./Signupmain";
import "./sign_style.css";

export const Signup_page = () => {
  return (
    <div>
      <Signupmain></Signupmain>
      <Getapp></Getapp>
      <Footer></Footer>
    </div>
  );
};
