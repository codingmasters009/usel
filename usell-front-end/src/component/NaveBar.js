import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import logo from "../images/companyLogo.png";
const NaveBar = () => {
  return (
    <div>
      <div className="headerRoot pb">
        <div>
          <div
            className=""
            style={{
              width: "100%",
              height: "80px",
              display: "flex",
              overflow: "hidden",
            }}
          >
            <div
              style={{ width: "20%", textAlign: "right", paddingTop: "10px" }}
            >
              <Link to="/" className=" ">
                {" "}
                <img
                  src={logo}
                  alt="Girl in a jacket"
                  // width="100%"
                  // style={{}}
                  // height="100%"
                />
              </Link>
            </div>
            <div style={{ width: "80%" }}>
              <div
                style={
                  {
                    //   width: "100%",
                    //   border: "1px solid red",
                    // textAlign: "right",
                    //   float: "right",
                  }
                }
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: "20%",
                    color: "white",
                  }}
                >
                  <Link to={"/track"} className=" ">
                    <div
                      className="navItemtop"
                      style={{
                        borderRight: "1px solid white",
                        // borderRadius: "2px",
                      }}
                    >
                      Track Order
                    </div>
                  </Link>

                  <div
                    className="navItemtop"
                    style={{ borderRight: "1px solid white" }}
                  >
                    Help
                  </div>
                  <div className="navItemtop">Log In</div>
                </div>
              </div>
              <div
                style={{ display: "flex", marginLeft: "20px", color: "white" }}
              >
                <Link to={"/Varient/Phone/1"} className=" ">
                  <div
                    className="navItemtopDown"
                    style={{ borderRight: "1px solid lightgray " }}
                  >
                    Sell iPhone
                  </div>
                </Link>
                <Link to={"/Varient/Phone/1"} className=" ">
                  <div
                    className="navItemtopDown"
                    style={{ borderRight: "1px solid lightgray" }}
                  >
                    Sell Phone
                  </div>
                </Link>
                {/* <div className="navItemtopDown">Sell by category</div> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="pb"
          style={{ height: "2px", width: "100%", border: "1px solid #ffff00" }}
        ></div>
        <div className="" style={{ font: "'Open Sans',verdana, arial", fontSize: "18px", color: "white" }}>
          <center>
            CoronaVirus: How uSell is Staying Healthy and safe for You .
            <a className="sc" href="https://www.w3schools.com">
              Learn More
            </a>
          </center>
        </div>
      </div>
    </div>
  );
};

export default NaveBar;
