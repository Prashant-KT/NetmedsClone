import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import style from "./Homepage.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { BigCommonSlider } from "./BigCommonSlider/BigCommonSlider";

import { trandingImages } from "./trending";
import { newArrivalSlider } from "./newArrivals";
import { RunningSlider } from "./RunningSlider/RunningSlider";



export const Homepage = () => {
 

  const [show, setShow] = useState(true);
  const [position, setPosition] = useState("static");
  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setShow(false);
      setPosition("fixed");
    } else {
      setShow(true);
      setPosition("static");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div>
      <div>
        <Navbar position={position} />
        {show ? (
          <div className={style.withAttachedNavbar}>
            <div>
              <div>
                <Link to="/products">
                  <img
                    src="https://www.netmeds.com/pssets/version1657888943/gloryweb/images/icons/medicine.svg"
                    alt=""
                  />
                </Link>
                <Link
                  to="/products"
                  className={`${style.Linktag + " " + style.Linktag2}`}
                >
                  <p>Medicine</p>
                </Link>
                <IoMdArrowDropdown />
              </div>

              <div>
                <Link to="/products">
                  <img
                    src="https://www.netmeds.com/pssets/gloryweb/images/icons/wellness.svg"
                    alt=""
                  />
                </Link>
                <Link to="/products" className={style.Linktag}>
                  <p>Wellness</p>
                </Link>
              </div>
              <div>
                <Link to="/products">
                  <img
                    src="https://www.netmeds.com/pssets/gloryweb/images/icons/diagnostics.svg"
                    alt=""
                  />
                </Link>
                <Link to="/products" className={style.Linktag}>
                  <p>Lab Test</p>
                </Link>
              </div>
              <div>
                <Link to="/products">
                  <img
                    src="https://www.netmeds.com/pssets/gloryweb/images/icons/beauty.svg"
                    alt=""
                  />
                </Link>
                <Link to="/products" className={style.Linktag}>
                  <p>Beauty</p>
                </Link>
                <IoMdArrowDropdown />
              </div>
              <div>
                <Link to="/products">
                  <img
                    src="https://www.netmeds.com/pssets/gloryweb/images/icons/diagnostics.svg"
                    alt=""
                  />
                </Link>
                <Link to="/products" className={style.Linktag}>
                  <p>Health Corner</p>
                </Link>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <br></br>
      {/*  slider part starts here*/}
      <div className={style.sliderContainerBox}>
        <BigCommonSlider height={"350px"} />
      </div>

      <br></br>
      <br></br>
      <div className={style.threeCardProduct}>
        <div>
          <img
            src="https://www.netmeds.com/pssets/gloryweb/images/icons/Wellnessnew.svg"
            alt=""
          />
          <span className={style.contenttxt}>
            <span className={style.threeheading}>Order Medicine</span>
            <span className={style.savetext}> Save Upto 25% off</span>
          </span>
        </div>
        <div>
          <img
            src="https://www.netmeds.com/pssets/gloryweb/images/icons/Beautynew.svg"
            alt=""
          />
          <span className={style.contenttxt}>
            <span className={style.threeheading}>Beauty</span>
            <span className={style.savetext}> Save Upto 40% off</span>
          </span>
        </div>
        <div>
          <img
            src="https://www.netmeds.com/pssets/gloryweb/images/icons/ordermedicinnew.svg"
            alt=""
          />
          <span className={style.contenttxt}>
            <span className={style.threeheading}>Wellness</span>
            <span className={style.savetext}> Flat 15% off</span>
          </span>
        </div>
      </div>
      <div className={style.endHeadingGap}>
        <h2> Payment Partner Offers </h2>
        <p> View All </p>
      </div>
      <div className={style.paymentPartners}>
        <div>
          <img
            src="https://www.netmeds.com/images/cms/offers/1656602758_Simpl_Icon.png"
            alt=""
          />
          <div>
            <p>Get up to Rs. 1000 Simpl Cashback* (5%)!..</p>
            <p style={{ color: "gray" }}>
              Get up to Rs. 1000 Simpl Cashback (5%) on your FIRST-EVER payment
              via Simpl for ANY purchases* of AN..
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://www.netmeds.com/images/cms/offers/1616682689_paytm.png"
            alt=""
          />
          <div>
            <p>Get up to Rs. 300 Paytm Cashback!..</p>
            <p style={{ color: "gray" }}>
              Get Paytm Cashback between max. Rs. 300 and min. Rs. 30 on a
              minimum purchase of ANY products* worth..
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://www.netmeds.com/images/cms/offers/1654235738_Icon_256x256.png"
            alt=""
          />
          <div>
            <p>Use Pay with Rewards, Get up to Rs. 800 Cashback!..</p>
            <p style={{ color: "gray" }}>
              Get assured cashback between Rs. 30 and Rs. 800, when you pay
              using the “Pay with Rewards” payme..
            </p>
          </div>
        </div>
      </div>

      <div className={style.previouseDivider}>
        <div>
          <div className={style.preOrderDiv}>
            <div>
              <h2> Payment Partner Offers </h2>
              <p>Your previously ordered products</p>
            </div>
            <div className={style.view_btn}>View Order</div>
          </div>
          <div className={style.preOrderDivImg}>
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className={style.preOrderDiv}>
            <h2 style={{ marginTop: "20px", marginBottom: "10px" }}>
              Beauty Products
            </h2>
            <p style={{ color: "green", fontSize: "20px" }}>
              Save Upto 40% off
            </p>
            <span
              style={{
                height: "20px",
                padding: "10px",
                paddingLeft: "15px",
                paddingRight: "15px",
                borderRadius: "5px",
                color: "white",
                background: " #32aeb1",
              }}
            >
              Explore Beauty
            </span>
          </div>
          <div className={style.preOrderDivImg}>
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/beauty_products.svg"
              alt=""
            />
          </div>
        </div>
      </div>

       <div className={style.endHeadingGap}>
        <h2> Trending Today </h2>
      </div>

      <div style={{ height: "250px", width: "97%", margin: "auto" }}>
        <RunningSlider images={trandingImages} />
      </div>

      <div className={style.endHeadingGap}>
        <h2> Shop by Category </h2>
        <p> View All </p>
      </div>
      <div className={style.shopbyCategory}>
        <div>
          <img
            src="https://www.netmeds.com/images/category/481/thumb/ayush_1.jpg"
            alt="img"
          />
          <p>Ayush</p>
        </div>
        <div>
          <img
            src="https://www.netmeds.com/images/category/665/thumb/devices_1.jpg"
            alt="img"
          />
          <p>Devices</p>
        </div>
        <div>
          <img
            src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_2.jpg"
            alt="img"
          />
          <p>Mom & Baby</p>
        </div>
        <div>
          <img
            src="https://www.netmeds.com/images/category/500/thumb/fitness_1.jpg"
            alt="img"
          />
          <p>Fitness</p>
        </div>
        <div>
          <img
            src="https://www.netmeds.com/images/category/v1/3251/thumb/sexual_wellness_2.jpg"
            alt="img"
          />
          <p>Sexual Wellness</p>
        </div>
      </div>
      <div className={style.endHeadingGap}>
        <h2> New Arrivals </h2>
      </div>
      <div style={{ height: "250px", width: "97%", margin: "auto" }}>
        <RunningSlider images={newArrivalSlider} />
      </div>

      <div
        style={{
          height: "10px",
          width: "97%",
          margin: "auto",
          borderBottom: "1px solid rgb(196, 202, 206)",
        }}
      ></div>

      <div className={style.endHeadingGap}>
        <h2> Categories in Focus </h2>
        <p> View All </p>
      </div>
      <div className={style.shopbyCategory}>
        <div>
          <img
            src="https://www.netmeds.com/images/category/3087/thumb/feminine_hygiene_1.jpg"
            alt="img"
          />
          <p>Feminine Hygiene</p>
          <p style={{ color: "green" }}>Upto 65% off</p>
        </div>
        <div>
          <img
            src="https://www.netmeds.com/images/category/482/thumb/ayurvedic_1.jpg"
            alt="img"
          />
          <p>Ayurvedic</p>
          <p style={{ color: "green" }}>Upto 27% off</p>
        </div>
        <div>
          <img
            src="https://www.netmeds.com/images/category/676/thumb/orthopaedics_1.jpg"
            alt="img"
          />
          <p>Orthopaedics</p>
          <p style={{ color: "green" }}>Upto 65% off</p>
        </div>
        <div>
          <img
            src="https://www.netmeds.com/images/category/500/thumb/fitness_1.jpg"
            alt="img"
          />
          <p>Fitness</p>
          <p style={{ color: "green" }}>Upto 72% off</p>
        </div>
        <div>
          <img
            src="https://www.netmeds.com/images/category/3061/thumb/immunity_booster_1.jpg"
            alt="img"
          />
          <p>Immunity Booster</p>
          <p style={{ color: "green" }}>Upto 83% off</p>
        </div>
      </div>
      <div>
        <div className={style.disciption}>
          <b>Popular Wellness Products:</b>
          <p>Dabur Shilajit Gold Capsule 20's</p>{" "}
          <p>Dabur Chyawanprash Awaleha 500 gm</p>
          <p>Pankajakasthuri Breathe Easy Granules 400 gm</p>
          <p>Nestle Peptamen Peptide Based Diet Powder</p>
          <p>Pentasure 2.0 Vanilla Powder 1 kg</p>
          <p>Scalpe Plus Anti Dandruff Shampoo 75 ml</p>
          <p>
            Nestle Nan Excella Pro 1 (Upto 6 Months) Powder 400 gm (Refill Pack)
          </p>
          <p>Accu-Chek Active Test Strips 50's Breathe Easy </p>
          <p>D Protin Chocolate Powder 500 gm,- Vanilla Flavour 400 gm</p>
          <p>Climax Spray for Men 12 gm</p>
          <br></br>
          <b>Top-Selling Health Packages:</b>
          <p>AAROGYAM C</p>
          <p>Netmed Health Pack</p>
          <p>Aarogyam 1.3</p>
          <p>Netmeds Swasthya</p>
          <p>Diabetic Checkup</p>
          <p>Aarogyam 1.7</p>
          <p>Basic Allergy Package</p>
          <p>Aarogyam X</p>
          <p>Advance Heart Care product</p>
          <p>Netmeds Swasthya Plus</p>
          <p>Most Viewed Health Articles:</p>
          <p> Spray for Men 12 gm</p>
          <br></br>
          <b>Top-Selling Lab Tests:</b>
          <p>Complete Blood Count (CBC)/Complete Hemogram</p>
          <p>LIVER FUNCTION TEST</p>
          <p>Blood Glucose Fasting (FBS)</p>
          <p>THYROID PROFILE -TOTAL(T3,T4&amp;TSH)</p>
          <p>Fever Profile</p>
          <p>Urine Routine &amp; </p>
          <p>Hemoglobin A1C (HbA1c)</p>
          <p>25-OH Vitamin D (TOTAL)/Vitamin D Total 25 Hydroxy</p>
          <p>Uric Acid</p>
          <p>Maternal screen-1st Trimester Dual Marker test</p>
          <br></br>
          <b>Top-Selling Radiology Tests:</b>
          <p>Ultrasound Whole Abdomen</p>
          <p>MRI Scan Brain</p>
          <p>CT Scan Brain</p>
          <p>ECHO</p>
          <p>X Ray Chest PA View</p>
          <p>PET Scan</p>
          <p>ECG</p>
          <p>Ultrasound Pelvis</p>
          <p>3T MRI Scan Brain</p>
          <p>CT Scan Chest</p>
          <p>MRI Scan Brain</p>
          <p>CT Scan Brain</p>
          <br></br>
          <b>Welcome to Netmeds.com! India's Leading Online Pharmacy!</b>
          <br></br>
          <p>
            With a dynamic legacy of over 100 years in the pharma business, it
            comes as no surprise that Netmeds.com is the first choice of over 4
            million+ satisfied customers when it comes to an online pharmacy in
            India. Netmeds.com has a pan India presence as we deliver health
            care essentials to every state in the country. We take your health
            seriously at Netmeds.com. Be it purchasing medicines online, lab
            tests or online doctor consultations, we've got it all covered for
            our customers!
          </p>
          <b>
            Take the Worry Out of Buying Medicines! Purchase Medicines Online
            Anytime, Anywhere!
          </b>
          <p>
            Get everything you need at Netmeds.com to take care of your health
            right from high-quality, affordable, authentic prescription
            medicines, Over-The-Counter pharmaceuticals products to general
            health care products, Ayurveda, Unani and Homeopathy medicines.
          </p>
          <p>
            Buy medicines online at Netmeds.com from the comfort of your home
            and we will take care of the rest! We will ensure that the
            life-saving drugs reach your doorstep without a hitch. Do away with
            the hassle of driving to the medical store, waiting in line, or even
            remembering your refills! Netmed.com will sort out those problems
            for you effectively so that you can lead a healthy and full life!
          </p>
          <p>
            Ordering medicines online at Netmeds.com is just a simple 4 step
            process. Browse through our wide range of health care products, add
            them to your cart, uploading your prescription (if required) and
            proceed to checkout!
          </p>
          <p>
            Ordering medicines online at Netmeds.com is just a simple 4 step
            process. Browse through our wide range of health care products, add
            them to your cart, uploading your prescription (if required) and
            proceed to checkout!
          </p>
          <b>Buying medicines online</b>
          <p>
            At Netmeds.com, we ensure that you get high-quality life-saving
            medicines are delivered to you on time. Order medicines online at
            your convenience from across the country. We also deliver Ayurvedic,
            Homeopathic, Unani and Over-The-Counter (OTC) products to over
            19,000 pin codes across the country!
          </p>
          <b>Medicine Subscription</b>
          <p>
            Remembering to refilling medicines month on month to address chronic
            conditions can be a hassle. Netmeds' subscription service will
            ensure that you never run out of these vital medicines. Just set it
            up and your medicines will get refilled and delivered automatically
            every month to your doorstep!
          </p>
          <b>Netmeds First</b>
          <p>
            Netmeds First is our loyalty programme which puts you and your
            health First! First members can get an extra 2.5% NMS Cashback (up
            to INR 100 per order) on prescription medication ordered using the
            membership. Members are also eligible for free delivery, priority
            processing, and free online doctor consultations!
          </p>
          <p>
            Do you find yourself constantly putting off getting your lab tests
            done because it's inconvenient to schedule them or because they are
            expensive? Visit Netmed.com to book lab tests and health checkup
            packages online from well-reputed, certified diagnostic labs
            according to your convenience and at affordable rates. We will also
            make your lab reports available online for easy access.
          </p>
          <b>Our Awards and Recognition</b>
          <p>
            We at Netmeds.com know how crucial medicine is to treating health
            conditions and we are extremely proud to be at the forefront of the
            online medicine industry. Netmeds.com offers its customers a
            reliable online pharmacy service and as a testament to our
            commitment, we are regularly recognized and honoured with awards. We
            are pleased to highlight some of our awards here and we aim to
            continue adding more feathers to our cap!
          </p>
          <p>
            We have bagged the 'Health Tech Start-Up of the Year' at the NDTV
            Unicorn Awards 2016. We are also proud that we have been selected as
            Asia's Most Promising Brand 2018' by Int+ WCRC International.
          </p>
          <p style={{ marginBottom: "50px" }}>
            We have been named as the 'Best Digital Healthcare Start-up' by ET
            Now World Health and Wellness Congress in 2019. We were also
            recognized by ET Now World Health and Wellness Congress as the
            'Digital Healthcare Company of the year' in 2019.
          </p>
        </div>
      </div> 
    </div>
  );
};
