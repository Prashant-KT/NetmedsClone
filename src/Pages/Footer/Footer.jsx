import { Divider, TextField } from "@mui/material";
import React from "react";
import style from "./Footer.module.css";
import Box from "@mui/material/Box";
export const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.boxPadding}>
        <Box sx={{ height: 150, display: "flex", alignItems: "center" }}>
          <div className={style.footerlogo}>
            {" "}
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg"
              alt="Netmeds.com, India ki Online Pharmacy"
            />{" "}
          </div>
          <div className={style.footertxt}>
            {" "}
            Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha &amp;
            Company – one of India’s most trusted pharmacies, with over 100
            years’ experience in dispensing quality medicines.{" "}
          </div>
        </Box>
        <Divider variant="insert" color="gray" />
        <div className={style.footerAllList}>
          <ul>
            <li>
              <h2>Company</h2>
            </li>
            <li>About Netmeds</li>
            <li>Customers Speak</li>
            <li>In the News</li>
            <li>Career</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Fees and Payments Policy</li>
            <li>Shipping and Delivery Policy</li>
            <li>Return, Refund and Cancellation Policy</li>
            <li>Contact</li>
          </ul>

          <ul className={style.makeNone}>
            <li>
              <h2>Shopping</h2>
            </li>
            <li>Browse by A-Z</li>
            <li>Browse by Manufacturers</li>
            <li>Health Articles</li>
            <li>Offers / Coupons</li>
            <li>FAQs</li>
          </ul>

          <ul className={style.makeNone}>
            <li>
              <h2>CATEGORIES</h2>
            </li>
            <li>Ayush</li>
            <li>Devices</li>
            <li>Family Care</li>
            <li>Fitness</li>
            <li>Lifestyle</li>
            <li>Personal care</li>
            <li>Treatments</li>
          </ul>

          <ul className={style.makeNone}>
            <li>
              <h2>Social</h2>
            </li>
            <li>Patients Alike</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
            <li>Refer & Earn</li>
          </ul>

          <div className={`${style.subscribe}`}>
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <li>
              Get a free subscription to our health and
              <br></br>fitness tip and stay tuned to our latest <br></br>offers
            </li>
            <br></br>
            <TextField
              id="standard-basic"
              label="Enter Your Email Address"
              variant="standard"
            />

            <br></br>

            <br></br>
            <div className={style.appStore}>
              <img
                src="https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png"
                alt="Download Netmeds App for iOs from App Store"
                title="Download Netmeds App for iOs from App Store"
              />
              <img
                src="https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png"
                alt="Download Netmeds App for iOs from App Store"
                title="Download Netmeds App for iOs from App Store"
              />
            </div>
          </div>
        </div>
        <Divider variant="insert" color="gray" />
        <div className={style.reservedLogo}>
          <h4>Medicine</h4>
          <h4>Wellness</h4>
          <h4>Lab Tests</h4>
          <h4>Beauty</h4>
          <h4>Copyright© 2022. All Rights Reserved.</h4>
        </div>
      </div>
    </div>
  );
};
