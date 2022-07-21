import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import style from "./Signup.module.css";
import { LoadingButton } from "@mui/lab";

import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlelogin = () => {
    let loginData = {
      number,
      password,
      userName,
    };
    if (number !== "" && password !== "" && userName !== "") {
      axios
        .post("http://localhost:8080/netmendsuserdata", loginData)
        .then((x) => {
          console.log("userAdded");
          setNumber("");
          setPassword("");
          setUserName("");
          setLoading(true);
        })
        .then(() => {
          setTimeout(() => {
            setLoading(false);
            navigate("/signin");
          }, 1000);
        });
    } else {
      alert("please fill all data");
    }
  };
  return (
    <>
      <Navbar position={"static"} />
      {loading ? (
        <LoadingButton
          loadingIndicator="Loading…"
          variant="outlined"
          style={{ fontSize: "50px", color: "orange" }}
        >
          Loading.....
        </LoadingButton>
      ) : (
        <div>
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
                  <h2> Sign Up</h2>
                  <p>
                    Sign up or Sign in to access your orders, special offers,
                    health tips and more!
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
                  {/* Username */}
                  <TextField
                    helperText="Please enter your name"
                    id="demo-helper-text-misaligned-no-helper"
                    label="User Name"
                    style={{ width: "100%" }}
                    onChange={handleUserName}
                  />
                  <br></br>
                  <br></br>
                  {/* password */}
                  <TextField
                    helperText="Please enter Password"
                    id="demo-helper-text-misaligned-no-helper"
                    label="Password"
                    type="password"
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
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};
