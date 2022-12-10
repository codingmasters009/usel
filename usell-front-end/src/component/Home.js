import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./Home.css";
import "./Home.css";

import { config } from "../config/config";

///////////images/////////////
import mobile from "../images/phone1.png";
import ipad1 from "../images/ipad1.png";
import mac1 from "../images/mac1.png";
import screen1 from "../images/screen1.png";
import watch1 from "../images/watch1.png";
import ipod1 from "../images/ipod1.png";
import tablet1 from "../images/tablet1.png";
import gameConsole1 from "../images/gameConsole1.png";
import camera1 from "../images/camera1.png";
import computer1 from "../images/computer1.png";
import tech1 from "../images/tech1.png";

//////////////////////////////////////
import brand from "../images/company1.png";
import firstOption from "../images/firstOption.png";
import instagramLogo from "../images/instagramLogo.png";
import twitterLogo from "../images/twitterLogo.png";
import i1 from "../images/i1.png";
import i2 from "../images/i2.png";
// import customer1121 from "../images/customer1121.png";
import couriorFullImg from "../images/couriorFullImg.png";
import deviceslider from "../images/deviceslider.png";
import categoryData from "../data/images/dynamic/category.json";
const axios = require("axios").default;
const Home = () => {
  let [data, setdata] = useState([]);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  const getdata = () => {
    let url = config.baseURL + "data/category";
    fetch(url, { mode: "cors" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setdata((data = data[0]));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    goToTop();
    getdata();
  }, []);
  return (
    <div className="">
      <div className="bodyroothome">
        <div>
          <center>
            <div className="toptext">
              <p style={{ fontSize: "34px" }}>
                The Most Money For The Least Effort
              </p>
            </div>
            <div>
              <p style={{ color: "#747774", fontSize: "22px" }}>
                Working or damaged, sell your used phone in seconds
              </p>
            </div>
            <div className="topimages" style={{}}>
              <div className="topimagesItem">
                <img
                  className="imgMaindealsimg"
                  src={mobile}
                  alt="Girl in a jacket"
                />

                <br />
                <center>
                  <Link to={"/Varient/Phone/1"} className=" ">
                    <button
                      type="button"
                      className="btn"
                      style={{
                        marginTop: "73px",
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "20px",
                        backgroundColor: "#00D2A8",
                        padding: "20px 20%",
                        borderRadius: "15px",
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        // borderBottomLeftRadius: "15px",
                        borderBottom: "5px solid darkblue",
                      }}
                      //   style={{ backgroundColor: "#00D2A8" }}
                    >
                      Sell Phone
                    </button>
                  </Link>
                </center>
              </div>
              <div className="topimagesItem">
                <img
                  className="imgMaindealsimg"
                  src={brand}
                  alt="Girl in a jacket"
                />{" "}
                <br />
                <center>
                  <Link to={"/Varient/Any Phone/1"} className=" ">
                    <button
                      type="button"
                      className="btn "
                      style={{
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "20px",
                        backgroundColor: "#F54C45",
                        padding: "20px 20%",
                        borderRadius: "15px",
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        // borderBottomLeftRadius: "15px",
                        borderBottom: "5px solid darkblue",
                      }}
                    >
                      Sell Any Phone
                    </button>
                  </Link>
                </center>
              </div>
            </div>
            <img
              className="hidenSection"
              style={{ width: "100%", height: "100px" }}
              src={firstOption}
              alt="Girl in a jacket"
            />{" "}
            <br />
          </center>
        </div>
        <div
          className="itemGrid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.map((value, index) => {
            console.log(config.baseURL + "images/" + value.category_img);
            return (
              <Link
                to={"/Varient/" + value.category_name + "/" + value.category_id}
                className=" "
              >
                <div className="productGridItem">
                  <div className="imgdivProduct">
                    <img
                      // crossOrigin="anonymous"
                      height="100%"
                      src={config.baseImg + value.category_img}
                      // src={
                      //   "http://localhost:5005/images/img1670493598217_acomputer01.png"
                      // }
                      // src={value.category_img}
                      alt="img not found"
                      style={{ width: "100%", height: "90px" }}
                    />
                  </div>{" "}
                  <center>
                    <label>
                      <b>{value.category_name}</b>
                    </label>
                  </center>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="">
        <div className="CustomerSection">
          <center>Customers Rave</center>
          <div className="CustomerSectionInner">
            <div style={{ display: "flex" }}>
              <img
                src={instagramLogo}
                alt="Girl in a jacket"
                style={{ width: "60px", height: "75px" }}
              />
              <div>
                Used #uSell to get cash for my old iPhone 4 with a cracked
                screen. Better than collecting dust in my desk drawer!-
                <b>Holly R</b>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img
                src={twitterLogo}
                alt="Girl in a jacket"
                style={{ width: "60px", height: "90px" }}
              />
              <div>
                Had a great experience selling my Samsung Galaxy S4 to @usell.
                They were quick & easy to use. No fuss, no muss! I'd recommend
                to anyone.-<b> Erin S</b>
              </div>
            </div>
          </div>
        </div>
        <center>
          <div
            style={{
              marginTop: "-50px",
              width: "50px",
              height: "50px",
              transform: "rotate(45deg)",
              backgroundColor: "#f6f7f2",
            }}
          ></div>
        </center>
        <div className="counter" style={{}}>
          <div>
            <center>
              <b style={{ fontSize: "30px" }}>459,561</b>
              <br />
              Customers cashed in
            </center>
          </div>
          <div>
            <center>
              <b style={{ fontSize: "30px" }}>$50,702,698</b>
              <br />
              Paid to people like you
            </center>
          </div>
        </div>
        <div className="coutiourSection">
          <img src={couriorFullImg} alt="Girl in a jacket" style={{}} />
        </div>
        <div
          className="ImgSlider"
          style={{
            backgroundColor: "#F54C45",
            color: "white",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: "25%" }}>
              <img
                src={i2}
                alt="Girl in a jacket"
                style={{ height: "200px", marginTop: "15px " }}
              />
            </div>
            <div style={{ width: "80%" }}>
              <center style={{ fontSize: "34px" }}>
                Selling Your Device Is Simple
              </center>
              <center style={{ fontSize: "18px" }}>
                Get an instant offer, ship your device for free, get paid.
                <br /> It's all guaranteed for 30 days.
                <center>
                  <Link to={"/Varient/Phone/1"} className=" ">
                    <button
                      type="button"
                      className="btn"
                      style={{
                        marginTop: "50px",
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "20px",
                        backgroundColor: "#00D2A8",
                        padding: "20px 14%",
                        borderRadius: "15px",
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        // borderBottomLeftRadius: "15px",
                        borderBottom: "5px solid darkblue",
                      }}
                      //   style={{ backgroundColor: "#00D2A8" }}
                    >
                      Sell What you`ll get
                    </button>
                  </Link>
                </center>
              </center>
            </div>
            <div style={{ width: "25%" }}>
              <img
                src={i1}
                alt="Girl in a jacket"
                style={{
                  height: "200px",
                  marginTop: "15px",
                  float: "right",
                  display: "flex",
                }}
              />
            </div>
            {/* <div></div> */}
          </div>
          {/* <img src={deviceslider} alt="Girl in a jacket" style={{}} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
