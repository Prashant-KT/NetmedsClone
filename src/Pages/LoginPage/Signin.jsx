import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import style from "./Signin.module.css";
export const Signin = () => {
  const[number, setNumber] = useState("")
  const [password, setPassword] = useState("");

  const handleNumber = (e) =>{
    alert(e.target.value)
  }
   const handlePassword = (e) => {
     alert(e.target.value);
   };

   const handlelogin = () =>{
    alert("hi")
   }
  return (
    <div>
      <Navbar position={"static"} />

      <div className={style.signinCont}>
        <div className={style.bigBox}>
          <div className={style.bigBoxImage}>
            <img
              src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png"
              alt=""
            />
          </div>
          <div className={style.bigBoxLogin}>
            <div>
              <h2>Sign In</h2>
              <p>
                Sign up or Sign in to access your orders, special offers, health
                tips and more!
              </p>
              {/* login email */}
              <TextField
                helperText="Please enter registered Mobile Number"
                id="demo-helper-text-misaligned-no-helper"
                label="Mobile Number"
                style={{ width: "100%" }}
                onChange={handleNumber}
              />
              <br></br>
              <br></br>
              {/* password */}
              <TextField
                helperText="Please enter Password"
                id="demo-helper-text-misaligned-no-helper"
                label="Password"
                style={{ width: "100%" }}
                onChange={handlePassword}
              />
              {/* submit */}
              <br></br>
              <br></br>
              <Button
                className={style.submitButton}
                variant="contained"
                color="success"
                onClick={handlelogin}
              >
                Submit
              </Button>
              <Link to='/signup'>Create a new account</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
