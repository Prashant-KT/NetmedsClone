import styles from "./PaymentPage.module.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
    const { totalMrp, totalPrice, totalSaving } = useSelector(
      (state) => state.productDetails
    );
     const MRP = totalMrp.toFixed(2);
     const discount = totalSaving.toFixed(2);
    const total_amount = totalPrice.toFixed(2);
    const [showVoucher, setShowVoucher] = useState(true);
    const [showPayment, setShowPayment] = useState(false);
       const navigate = useNavigate();
       const dispatch = useDispatch();

      function goHome() {
        alert("Congratulations your order is place")
        navigate('/')
      }

  return (
    <div>
      <div className={styles.nav}>
        <img
          src="https://www.netmeds.com/msassets/home-logo-netmeds-new.svg"
          alt=""
        />
      </div>
      <div className={styles.blueNav}>
        <h2>Payment Details</h2>
        <div className={styles.breadScrum}>
          <div>
            <img
              src="https://www.netmeds.com/msassets/images/icons/shopping-cart-added-white.svg"
              alt=""
            />
            <p>Your cart</p>
          </div>
          <div className={styles.horizontalBar}></div>
          <div>
            <img
              src="https://www.netmeds.com/msassets/images/icons/order-in-process-white.svg"
              alt=""
            />
            <p>Order Review</p>
          </div>
          <div className={styles.horizontalBar}></div>
          <div>
            <img
              src="https://www.netmeds.com/msassets/images/icons/rupee_white_icon.svg"
              alt=""
            />
            <p>Payment Details</p>
          </div>
        </div>
      </div>
      {/* blue breadcrum ended here */}
      <div className={styles.main_container}>
        <div className={styles.body_conatiner}>
          <div className={styles.body_left_div}>
            <div className={styles.left_vouchers}>
              <div className={styles.left_vouchers_top_div}>
                <input
                  type="checkbox"
                  checked={showVoucher}
                  onChange={() => setShowVoucher(!showVoucher)}
                />
                <p>VOUCHERS</p>
              </div>
              {showVoucher && (
                <>
                  <hr />
                  <div className={styles.left_vouchers_hidden_div}>
                    <input type="text" placeholder="Enter the Voucher Code" />
                    <button onClick={goHome}>APPLY</button>
                  </div>
                </>
              )}
            </div>

            <div className={styles.left_paytm}>
              <p className={styles.payment_name}>PREFERED PAYMENT</p>
              <div>
                <div className={styles.payment_logo}>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/Paytm_lo.png"
                    alt="Paytm"
                  />
                  <p>Paytm</p>
                </div>
                <div>
                  <p className={styles.payment_link}>LINK</p>
                </div>
              </div>
              <p className={styles.payment_offer}>
                Pay via Paytm wallet for orders above Rs. 899 & get guaranteed
                Paytm cashback up to Rs. 300. TCA
              </p>
            </div>

            <div className={styles.left_reward}>
              <p className={styles.payment_name}>REWARD PAY</p>
              <div className={styles.reward_logo_div}>
                <div className={styles.reward_img_div}>
                  <img
                    src="https://www.netmeds.com/msassets/images/icons/TWID.png"
                    alt="Reward"
                  />
                  <p>Pay With Rewards</p>
                </div>
                <div>
                  <input
                    type="radio"
                    checked={showPayment === 1}
                    onChange={() => {
                      setShowPayment(1);
                    }}
                  />
                </div>
              </div>
              <p className={styles.reward_payment_offer}>
                Pay with Rewards and get cashback upto Rs 800
              </p>
              {showPayment === 1 && (
                <div className={styles.payment_hidden_div}>
                  <button onClick={goHome}>PAY RS.{total_amount}</button>
                </div>
              )}
            </div>

            <div className={styles.left_reward}>
              <p className={styles.payment_name}>PAY LATER</p>
              <div className={styles.reward_logo_div}>
                <div className={styles.reward_img_div}>
                  <img
                    src="https://www.netmeds.com/msassets/images/icons/simpl-logo.png"
                    alt="Pay later"
                  />
                  <p>Simpl</p>
                </div>
                <div>
                  <input
                    type="radio"
                    checked={showPayment === 2}
                    onChange={() => {
                      setShowPayment(2);
                    }}
                  />
                </div>
              </div>
              <p className={styles.reward_payment_offer}>
                Get flat 5% Simpl cashback up to Rs. 1000. Valid for new users
                only. TCA.
              </p>
              {showPayment === 2 && (
                <div className={styles.payment_hidden_div}>
                  <button onClick={goHome}>PAY RS.{total_amount}</button>
                </div>
              )}
            </div>

            <div className={styles.left_reward}>
              <div className={styles.reward_logo_div}>
                <div className={styles.reward_img_div}>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/COD.png"
                    alt="Cash on Delivery"
                  />
                  <p>Cash on Delivery</p>
                </div>
                <div>
                  <input
                    type="radio"
                    checked={showPayment === 5}
                    onChange={() => {
                      setShowPayment(5);
                    }}
                  />
                </div>
              </div>
              <p className={styles.reward_payment_offer}>
                Hear us out! Pay online and earn 100% NMS SuperCash (up to Rs.
                3000) on all prepaid orders
              </p>
              {showPayment === 5 && (
                <div className={styles.payment_hidden_div}>
                  <button onClick={goHome}>
                    PAY RS.{total_amount} ON DELIVERY
                  </button>
                </div>
              )}
            </div>

            <div className={styles.left_reward}>
              <p className={styles.payment_name}>OTHER PAYMENTS</p>
              <div className={styles.reward_logo_div}>
                <div className={styles.reward_img_div}>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/Phone_Pay_lo.png"
                    alt="PhonePe"
                  />
                  <p>PhonePe</p>
                </div>
                <div>
                  <input
                    type="radio"
                    checked={showPayment === 3}
                    onChange={() => {
                      setShowPayment(3);
                    }}
                  />
                </div>
              </div>
              {showPayment === 3 && (
                <div className={styles.payment_hidden_div}>
                  <button onClick={goHome}>PAY RS.{total_amount}</button>
                </div>
              )}
            </div>

            <div className={styles.left_reward}>
              <p className={styles.payment_name}>UPI</p>
              <div className={styles.reward_logo_div}>
                <div className={styles.reward_img_div}>
                  <img
                    src="https://www.netmeds.com/assets/pgicon/googlepaylogo.png"
                    alt="Google Pay"
                  />
                  <p>Google Pay</p>
                </div>
                <div>
                  <input
                    type="radio"
                    checked={showPayment === 4}
                    onChange={() => {
                      setShowPayment(4);
                    }}
                  />
                </div>
              </div>
              {showPayment === 4 && (
                <div className={styles.payment_hidden_div}>
                  <button onClick={goHome}>PAY RS.{total_amount}</button>
                </div>
              )}
            </div>

            <div className={styles.left_reward}>
              <p>CREDIT & DEBIT CARDS</p>
              <hr />
              <p>ADD NEW CARD</p>
            </div>
          </div>

          <div className={styles.body_right_div}>
            <div className={styles.right_div_payment}>
              <p>PAYMENT DETAILS</p>
              <div className={styles.price_div}>
                <div>
                  <p>MRP Total</p>
                  <p>Rs.{MRP}</p>
                </div>
                <div>
                  <p>Netmeds Discount</p>
                  <p>- Rs.{discount}</p>
                </div>
                <div>
                  <b>Total Amount *</b>

                  <p>
                    <b>Rs.{total_amount}</b>
                  </p>
                </div>
              </div>
              <div className={styles.payment_saving}>
                <p>TOTAL SAVINGS Rs.{discount}</p>
              </div>
            </div>
            <div className={styles.description}>
              <p>
                Netmeds is a technology platform to facilitate transaction of
                business. The products and services are offered for sale by the
                sellers. The user authorizes the delivery personnel to be his
                agent for delivery of the goods. For details read{" "}
                <span>Terms & Conditions</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
