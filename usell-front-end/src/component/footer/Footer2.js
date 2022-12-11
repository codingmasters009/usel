import React, { useState, useEffect } from "react";
import "./Footer2.css";
import footerLogo from "./Soltelco-Logo-w.png";
import tiktoklogo from "./icons8-tiktok-30.png";
import { Link } from "react-router-dom";
import p3 from "../../images/p3.png";
import f3l2 from "../../images/f3l2.png";
import f3l3 from "../../images/f3l3.png";
const Footer2 = () => {
  let [stateFooter, setstateFooter] = useState(false);

  const myFunction = () => {
    if (stateFooter == false) setstateFooter(true);
    else setstateFooter(false);
  };
  useEffect(() => {
    // goToTop();
    // getdata();
  }, [stateFooter]);
  return (
    <>
      <div className="footerRootSection" style={{ marginTop: "0px" }}>
        <div className="d-flex flex-column h-100" style={{ color: "white" }}>
          <footer className="w-100 py-4 flex-shrink-0">
            <div className="container py-4 containerUpdate">
              <div
                className="row gy-4 gx-5"
                // style={{ border: "1px solid red" }}
              >
                <div
                  className="col-lg-2 col-md-8 footerSection"
                  // style={{ border: "1px solid red" }}
                >
                  <span
                    className="text-white mb-3"
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                  >
                    Sell Your Staff
                  </span>
                  <ul className="list-unstyled text-muted">
                    <div>
                      <Link to="/Varient/ipods/1" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          &nbsp;ipods
                        </span>
                      </Link>
                      &nbsp; &nbsp;
                      <Link to="/Varient/IPHONES/1" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          IPHONES
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/Varient/iPads/1" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          iPads
                        </span>
                      </Link>
                      &nbsp; &nbsp;
                      <Link to="/Varient/Tablets/1" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          Tablets
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/Varient/ cell phone/1"
                        className="linkdecorationn"
                      >
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          cell phone
                        </span>
                      </Link>
                      &nbsp;
                      <Link to="/supportfaqs" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          Bulk Sale
                        </span>
                      </Link>
                    </div>
                  </ul>
                </div>
                <div
                  className="col-lg-2 col-md-8 footerSection"
                  // style={{ border: "1px solid red" }}
                >
                  <span
                    className="text-white mb-3"
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      paddingLeft: "10px",
                    }}
                  >
                    About Us
                  </span>
                  <ul className="list-unstyled text-muted">
                    <div>
                      <Link to="/findus" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          &nbsp; &nbsp;How it Works
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/company" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          &nbsp; Company
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/Varient/Phone/1" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          {" "}
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          &nbsp; Investors
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/press" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          &nbsp; Press & Media
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/review" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          &nbsp; Testimonials
                        </span>
                      </Link>
                    </div>

                    {/* <div>
                      <Link to="/jobs" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
                          </span>
                          &nbsp; Jobs
                        </span>
                      </Link>
                    </div> */}
                  </ul>
                </div>
                <div
                  className="col-lg-2 col-md-8 footerSection"
                  // style={{ border: "1px solid red" }}
                >
                  <span
                    className="text-white mb-3"
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      paddingLeft: "10px",
                    }}
                  >
                    Support
                  </span>
                  <ul className="list-unstyled text-muted">
                    <div>
                      <Link to="/esim" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          &nbsp;&nbsp;Help Center
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/track" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          &nbsp; Track Order
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/contectus" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          {" "}
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          &nbsp;&nbsp;Contect Us
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/meetourbuyer" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          &nbsp; Meet Our Buyers
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/becomeabuyer" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            {/* &#x203A; */}
                          </span>
                          &nbsp; Become a Buyer
                        </span>
                      </Link>
                    </div>
                  </ul>
                </div>
                <div
                  className="col-lg-4 col-md-6 footerSection"
                  // style={{ border: "1px solid red" }}
                >
                  <span
                    className="text-white mb-3"
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      // paddingLeft: "10px",
                    }}
                  >
                    CONNECT WITH US!
                  </span>
                  <p className="small whiteTheme " style={{ fontSize: "12px" }}>
                    Sign up to receive email updates.
                  </p>

                  <form action="#">
                    {/* <div className="">
                      <label className="">Write your email</label>
                    </div> */}
                    <div
                      className="input-group  "
                      width="60%"
                      style={{ display: "flex" }}
                    >
                      <input
                        className="form-control  "
                        style={{
                          // color: "#bf00ff",
                          backgroundColor: "white",
                          // fontWeight: "bolder",
                          // width: "70%",
                          height: "30px",
                        }}
                        type="text"
                        placeholder="Your Email"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className=" "
                        type="button"
                        placeholder="Subscribe"
                        style={{
                          backgroundColor: "#f54c45",
                          color: "white",
                          marginLeft: "5px",
                          border: "none",
                        }}
                      >
                        Subscribe
                      </button>
                    </div>
                    {/* <div className="" style={{ marginTop: "5px" }}> */}
                    {/* <center> */}

                    {/* </center> */}
                    {/* </div> */}
                  </form>
                  <center>
                    <div
                      className=""
                      style={{ display: "flex", marginTop: "5px" }}
                    >
                      <div className=" ">
                        <a href="#" target="_blank">
                          <i className="fa fa-facebook-f  sociallinks "></i>
                        </a>
                      </div>
                      <div className=" ">
                        <a href="#" target="_blank" className="">
                          <i className="fa fa-instagram  sociallinks"></i>
                        </a>
                      </div>
                      <div className=" ">
                        <center>
                          <a href="#" target="_blank" className="">
                            <i className="fa fa-twitter sociallinks"></i>
                          </a>
                        </center>
                      </div>
                      {/* <div className=" ">
                        <center>
                          <a href="#" target="_blank" className="">
                            <i className="fa fa-linkedin  sociallinks"></i>
                          </a>
                        </center>
                      </div> */}
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div style={{ padding: "0px 12%", backgroundColor: "#00d2a8" }}>
          <button
            style={{
              position: "absolute",
              marginTop: "-30px",
              // marginLeft: "50px",
              backgroundColor: "rgb(206,255,199)",
              border: "none",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              padding: "3px 10px",
              color: "#0C6667",
              transition: "all 0.3s ease",
            }}
            onClick={myFunction}
          >
            Pupular Searches{" "}
            {stateFooter ? (
              <i className="fa fa-minus-circle"></i>
            ) : (
              <i className="fa fa-plus-circle"></i>
            )}
          </button>
          <div style={{ transition: "all 0.3s ease" }}>
            {" "}
            {stateFooter ? (
              <div
                style={{
                  width: "100%",
                  padding: "50px 0",
                  textAlign: "center",
                  backgroundColor: "#00d2a8",
                  marginTop: "5px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  color: "white",
                }}
                id="myDIV"
              >
                <div className="hiddenDivFoooter">
                  Sell Your IPHONES
                  <br />
                  Sell Cell Phone
                  <br />
                  Sell iPhone 6 <br />
                  Sell Your iPhone 5s <br />
                  Sell Your iPhone 5 <br />
                  Sell Your iPhone 4 <br />
                  Sell Your iPhone 4s <br />
                  Sell Your iPad
                </div>
                <div className="hiddenDivFoooter">
                  Sell Your Samsung
                  <br />
                  Sell Tablets
                  <br />
                  Verizon Trade In
                  <br />
                  AT&T Trade In
                  <br />
                  Apple iPad Trade In
                  <br />
                  iPhone Trade In
                  <br />
                  Sell Your Blackberry
                  <br />
                  T-Mobile Trade-in
                  <br />
                </div>

                <div className="hiddenDivFoooter">
                  Sell Your HTC <br />
                  Sell Your iPod <br />
                  Sell Your Kindle <br />
                  Sell Your MacBook <br />
                  Cash for Old Phones <br />
                  Sell MP3 Players <br />
                  Sprint Buyback <br />
                  Sell Your Cell Phone <br />
                </div>
                <div className="hiddenDivFoooter">Recycle Cell Phones</div>
                <div className="hiddenDivFoooter"></div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="footerThirdPart" style={{}}>
          <div className="p3top" style={{ display: "flex" }}>
            <img
              // crossorigin="anonymous"
              src={p3}
              style={{ margin: "0px" }}
              alt="Girl in a jacket"
            />
            <div className="" style={{ marginTop: "70px", marginLeft: "30px" }}>
              <span className="numberDesign">7</span>
              <span className="numberDesign">0</span>
              <span className="numberDesign">6</span>
              <span
                className=""
                style={{ fontSize: "30px", color: "white", marginTop: "10px" }}
              >
                ,
              </span>
              <span className="numberDesign">4</span>
              <span className="numberDesign">7</span>
              <span className="numberDesign">4</span>
              <br />
              <span style={{ color: "white", fontSize: "12px" }}>
                Devices Saved from Landfills
              </span>
            </div>
            <div
              className=""
              style={{
                marginTop: "70px",
                marginLeft: "30px",
                // color: "#0C6667",
              }}
            >
              <span className="numberDesign">$</span>
              <span className="numberDesign">5</span>
              <span className="numberDesign">0</span>
              <span
                className=""
                style={{ fontSize: "30px", color: "white", marginTop: "10px" }}
              >
                ,
              </span>
              <span className="numberDesign">7</span>
              <span className="numberDesign">2</span>
              <span className="numberDesign">0</span>
              <span
                className=""
                style={{ fontSize: "30px", color: "white", marginTop: "10px" }}
              >
                ,
              </span>
              <span className="numberDesign">0</span>
              <span className="numberDesign">9</span>
              <span className="numberDesign">8</span>
              <br />
              <span style={{ color: "white", fontSize: "12px" }}>
                Dollars Earned by Our Customers
              </span>
            </div>
          </div>
          <div
            className="p3bottom"
            style={{ display: "flex", marginTop: "20px" }}
          >
            <div>
              <div className="" style={{ display: "flex", margin: "20px 0px" }}>
                <div
                  className="linksfooterdesugn"
                  style={{ backgroundColor: "#1877F2" }}
                >
                  <i className="fa fa-thumbs-up   "></i>like 13k
                </div>
                <div
                  className="linksfooterdesugn"
                  style={{ backgroundColor: "#1D9BF0", borderRadius: "14px" }}
                >
                  <i className="fa fa-instagram   "></i>Tweet
                </div>
              </div>
              <div className="" style={{ color: "white", fontSize: "12px" }}>
                <i className="fa fa-copyright"></i>uSell.com 2022{" "}
                <span style={{ marginLeft: "20px" }}>site Map | Legal</span>
                <br />
                All Rights Reserved.
              </div>
            </div>
            <div
              className="rightBottom"
              style={{
                fontSize: "12px",
                marginLeft: "50%",
                marginTop: "20px",
                color: "white",
              }}
            >
              Customer Security Guaranteed:
              <div style={{ display: "flex" }}>
                <img src={f3l2} /> <img src={f3l3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
