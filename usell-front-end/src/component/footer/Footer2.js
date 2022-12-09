import React from "react";
import "./Footer2.css";
import footerLogo from "./Soltelco-Logo-w.png";
import tiktoklogo from "./icons8-tiktok-30.png";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <div className="d-flex flex-column h-100" style={{ color: "white" }}>
          <footer className="w-100 py-4 flex-shrink-0">
            <div className="container py-4 containerUpdate">
              <div className="row gy-4 gx-5">
                <div className="col-lg-2 col-md-6">
                  <h5 className="text-white mb-3">Sell Your Staff</h5>
                  <ul className="list-unstyled text-muted">
                    <div>
                      <Link to="/Varient/IPHONES/1" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
                          </span>
                          iPhones
                          &nbsp;
                        </span>
                      </Link>
                      &nbsp; &nbsp;
                      <Link to="/Varient/ipods/1" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
                          </span>
                          iPods
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/Varient/iPads/1" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
                          </span>
                          iPads
                        </span>
                      </Link>
                      &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                      <Link to="/Varient/ cell phone/1" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
                          </span>
                          Cell Phone
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/Varient/Tablets/1" 
                        className="linkdecorationn"
                      >
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
                          </span>
                          Tablets
                        </span>
                      </Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Link to="/supportfaqs" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
                          </span>
                          Bulk Sale
                        </span>
                      </Link>
                    </div>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                  <h5 className="text-white mb-3">About Us</h5>
                  <ul className="list-unstyled text-muted">
                    <div>
                      <Link to="/findus" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
                          </span>
                          &nbsp; &nbsp;How it Works
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/company" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
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
                            &#x203A;
                          </span>
                          &nbsp; Investors
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/press" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
                          </span>
                          &nbsp; Press & Media
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/review" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
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
                <div className="col-lg-2 col-md-8">
                  <h5 className="text-white mb-3">Support</h5>
                  <ul className="list-unstyled text-muted">
                    <div>
                      <Link to="/esim" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
                          </span>
                          &nbsp;&nbsp;Help Center
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/track" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
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
                            &#x203A;
                          </span>
                          &nbsp;&nbsp;Contect Us
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/meetourbuyer" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
                          </span>
                          &nbsp; Meet Our Buyers
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/becomeabuyer" className="linkdecorationn">
                        <span className="linkdecorationninner">
                          <span style={{ fontSize: "20px", marginTop: "2px" }}>
                            &#x203A;
                          </span>
                          &nbsp; Become a Buyer
                        </span>
                      </Link>
                    </div>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-5">
                  <h5 className="text-white mb-3">CONNECT WITH US!</h5>
                  <p className="small whiteTheme " style={{ fontSize: "16px" }}>
                    Sign up to receive email updates.
                  </p>

                  <form action="#">
                    <div className="">
                      <label className="">Write your email</label>
                    </div>
                    <div className="input-group  " width="60%">
                      <input
                        className="form-control buttonDesigmEamil"
                        style={{
                          color: "#bf00ff",
                          backgroundColor: "white",
                          fontWeight: "bolder",
                          width: "70%",
                        }}
                        type="text"
                        placeholder="Your Email"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                    </div>
                    <div className="" style={{ marginTop: "5px" }}>
                      <center>
                        <button
                          className="buttonDesigmEamil"
                          type="button"
                          placeholder="Subscribe"
                        >
                          Subscribe
                        </button>
                      </center>
                    </div>
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
                      <div className=" ">
                        <center>
                          <a href="#" target="_blank" className="">
                            <i className="fa fa-linkedin  sociallinks"></i>
                          </a>
                        </center>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer2;
