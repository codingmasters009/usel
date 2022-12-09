import React from "react";
import { Link } from "react-router-dom";
import "./general.css";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
const PressMediaComponent = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  goToTop();
  return (
    <div>
      <div>
        <div className="gHeader">
          <h2>About us</h2>
        </div>
        <div className="gdivideSection" style={{}}>
          <div className="">
            <div>
              <h2 style={{ color: "#506383" }}>
                People are buzzing about uSell
              </h2>

              <p>Check out what the press has to say about what we're doing</p>
            </div>
            <br />
            <b style={{ color: "black" }}>What our customers are saying...</b>

            <div className="pgrid">
              <div className="gGridItem" style={{ display: "flex" }}>
                <img
                  src={p1}
                  alt="Girl in a jacket"
                  //   style={{ width: "60px", height: "75px" }}
                />
                <div className="">
                  uSell was a PERFECT alternative to throwing out my old cell
                  phone! It was a quick and easy way to recycle my phone, and I
                  got paid to do it!
                  <br />{" "}
                  <div style={{ width: "100%" }}>
                    <label style={{ justifyContent: "flex-end" }}>
                      <span style={{ color: "#506383", fontWeight: "bolder" }}>
                        Laura B
                      </span>{" "}
                      Vienna, VA
                    </label>
                  </div>
                </div>
              </div>
              <div className="gGridItem" style={{ display: "flex" }}>
                <img
                  src={p2}
                  alt="Girl in a jacket"
                  //   style={{ width: "60px", height: "75px" }}
                />
                <div className="">
                  uSell.com is awesome!! Cash without the hassles of trying to
                  sell the phone on an auction site!!
                  <div style={{ width: "100%" }}>
                    <label style={{ justifyContent: "flex-end" }}>
                      <span style={{ color: "#506383", fontWeight: "bolder" }}>
                        Chris G
                      </span>{" "}
                      Aurora, IL
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="pgrid">
              <div className="gGridItem" style={{ display: "flex" }}>
                <img
                  src={p3}
                  alt="Girl in a jacket"
                  //   style={{ width: "60px", height: "75px" }}
                />
                <div className="">
                  I sold phones through uSell several time and always got the
                  best price!
                  <div style={{ width: "100%" }}>
                    <label style={{ justifyContent: "flex-end" }}>
                      <span style={{ color: "#506383", fontWeight: "bolder" }}>
                        Gary K
                      </span>{" "}
                      Boca Raton, FL
                    </label>
                  </div>
                </div>
              </div>
              <div className="gGridItem" style={{ display: "flex" }}>
                <img
                  src={p4}
                  alt="Girl in a jacket"
                  //   style={{ width: "60px", height: "75px" }}
                />
                <div className="">
                  I am constantly upgrading my tech and uSell consistently has
                  the best offers and a quick turn around time. Best of all, I
                  know my transaction with uSell is safe and secure.
                  <div style={{ width: "100%" }}>
                    <label style={{ justifyContent: "flex-end" }}>
                      <span style={{ color: "#506383", fontWeight: "bolder" }}>
                        Robert F
                      </span>{" "}
                      Palm Beach, FL
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="grightsection">
            <Link to="/productvarient/computer2" className=" ">
              History
            </Link>
            <br />
            <br />
            <Link to="/productvarient/computer2" className=" ">
              Team
            </Link>
            <br />
            <br />
            <Link to="/productvarient/computer2" className=" ">
              Trusted buyers
            </Link>
            <br />
            <br />
            <Link to="/productvarient/computer2" className=" ">
              Meet our Customers
            </Link>
            <br />
            <br />
            <Link to="/productvarient/computer2" className=" ">
              Common Question
            </Link>
            <br />
            <br />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PressMediaComponent;
