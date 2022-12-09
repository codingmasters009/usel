import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import offersData from "../data/images/dynamic/offers.json";
import godaddy from "../images/godaddy.png";
import paypal from "../images/paypal.png";
import venmo from "../images/venmo.png";
import check from "../images/check.png";
import { config } from "../config/config";

import { Link } from "react-router-dom";
import "./general.css";
import "./PaymentMethod.css";
const PaymentMethod = () => {
  let [data, setdata] = useState([]);
  let [eedata, seteedata] = useState([]);
  let [edata, setedata] = useState("");

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  goToTop();
  let { id } = useParams();
  const getdata = () => {
    // localStorage.getItem("vid", id);

    let url = config.baseURL + "data/product/" + id;
    fetch(url, { mode: "cors" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setedata(
          "product name:" +
            data[0][0].product_name +
            "\nand product Price is:" +
            data[0][0].product_price +
            "\nor order Number:"
        );
        setedata(
          "product name" +
            data[0][0].product_name +
            "\nand product Price is" +
            data[0][0].product_price +
            "\nor order Number"
        );
        setdata((data = data[0][0]));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  let name, value;
  const handleInputs = (e) => {
    // console.log(e);

    // value = e.target.value;
    // name = e.target.name;
    seteedata(e.target.value);
  };
  useEffect(() => {
    goToTop();
    getdata();
  }, []);

  return (
    <div className="OfferPage">
      <div className="ProductVarientHeader">
        <div className="VarientHeaderTitle" style={{}}>
          Sell Your Devices
        </div>
        <div style={{ paddingLeft: "150px", fontSize: "12px" }}>
          How can I find out my series? {id}
        </div>
      </div>
      <div className="OfferBodyDivision">
        <div className="paymentSection" style={{ padding: "10px" }}>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  style={{ backgroundColor: "#506383", color: "white" }}
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1. PAYMENT
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>
                    We'll use your email to keep you in the loop about shipping
                    and payment
                  </strong>
                  <hr />
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      style={{ backgroundColor: "white" }}
                      type="email"
                      // name="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Confirm Email
                    </label>
                    <input
                      style={{ backgroundColor: "white" }}
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <label>
                    Choose how you'd like to receive your cash. Fast by check,
                    faster via PayPal and Venmo
                  </label>
                  <div className="flexfix">
                    <div>
                      <img
                        className="paymentpayImg"
                        src={paypal}
                        alt="Girl in a jacket"
                      />
                    </div>
                    <div>
                      <img
                        className="paymentpayImg"
                        src={venmo}
                        alt="Girl in a jacket"
                      />
                    </div>
                    <div>
                      <img
                        className="paymentpayImg"
                        src={check}
                        alt="Girl in a jacket"
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <form
                      action="https://formspree.io/f/maykgeab"
                      method="POST"
                    >
                      <label style={{ display: "none" }}>
                        Your email: <br />
                        <input
                          type="email"
                          style={{ width: "500px" }}
                          name="email"
                          value={eedata}
                        />
                      </label>
                      <br />
                      <label style={{ display: "none" }}>
                        Your message:
                        <br />
                        <textarea
                          style={{ width: "500px" }}
                          name="message"
                          value={edata}
                        ></textarea>
                      </label>
                      <br />
                      <button
                        style={{
                          color: "white",
                          fontWeight: "bolder",
                          fontSize: "18px",
                          backgroundColor: "#F54C45",
                          padding: "1px 10px",
                          borderRadius: "15px",
                          marginLeft: "15%",
                          marginTop: "20px",
                          // borderBottomLeftRadius: "15px",
                          borderBottom: "5px solid darkred",
                        }}
                        type="submit"
                      >
                        Continue to Shipping
                      </button>
                    </form>
                    {/* <button
                      type="button"
                      className="btn "
                      style={{
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "18px",
                        backgroundColor: "#F54C45",
                        padding: "1px 10px",
                        borderRadius: "15px",
                        marginLeft: "15%",
                        marginTop: "20px",
                        // borderBottomLeftRadius: "15px",
                        borderBottom: "5px solid darkred",
                      }}
                    >
                      Continue to Shipping
                    </button> */}
                  </div>
                </div>
              </div>
              <br />
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  2. SHIPPING
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>SHIPPING</strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  3. REVIEW
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>REVIEW</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="paymentProductSection">
          <label>
            Your cash offer:
            <div style={{ fontSize: "12px" }}>
              <div>
                <label>
                  <h2> {data.product_price}</h2>
                  <b>Buyer:</b> <br />
                  uSell.com
                  <br />
                  <a
                    style={{ color: "red", fontSize: "12px" }}
                    href="www.usell.com"
                  >
                    {" "}
                    View Offer
                  </a>
                </label>
                <br />
                <hr />
                <label>
                  You're Selling
                  <br />
                  <img
                    crossorigin="anonymous"
                    src={data.product_img}
                    style={{ height: "200px" }}
                    alt="Girl in a jacket"
                  />
                  <br />
                </label>
                <br />
                <label>
                  <b>PRODUCT</b>
                  <br />
                  {data.product_name}
                </label>
                <br />
                <label>
                  <b>Product Spects</b>
                  <br />
                  {data.product_spects}
                </label>
                <br />
                <label>
                  <b>CONDITION</b>
                  <br />

                  {data.product_condition}
                </label>
                <br />
                {/* <label>
                        <b>QUOTE</b>
                        <br />
                        {/* {cat}  
                      </label>*/}
                <br />{" "}
                <label>
                  <b>SHIPPING</b>
                  <br />
                  <p style={{ color: "green" }}>Free</p>
                </label>
                <hr />
                <center>
                  <img
                    src={godaddy}
                    style={{ height: "50px", width: "150px" }}
                    alt="Girl in a jacket"
                  />
                </center>
                {/* <div className="productViewSectionImg">
                          <img src={value.img_url} alt="Girl in a jacket" />
                        </div> */}
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
