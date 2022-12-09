import React from "react";
import "./general.css";
import mob1 from "../images/mob1.png";
import mob2 from "../images/mob2.png";
const BecomeABuyer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  goToTop();
  return (
    <div>
      <div className="gHeader">
        <h2>Buying Products</h2>
      </div>
      <div className="mobbody">
        <div className="mobMain" style={{ fontSize: "16px" }}>
          <div>
            <b>Do you want to source inventory in high quantities?</b>

            <button
              type="button"
              className="folowButton"
              style={{
                fontSize: "20px",
                // backgroundColor: "lightgray",
                padding: "0px 10px",
                border: "1px solid  lightgray",
                borderRadius: "5px",
                marginLeft: "20px",
              }}
              //   style={{ backgroundColor: "#00D2A8" }}
            >
              Follow
            </button>
          </div>
          Thanks for your interest! If you are a professional buyer with a
          company looking to source smartphones and other electronic devices in
          bulk, contact us at support@usell.com with your name, legal company
          name, and telephone number. We will put you in contact with one of our
          sales reps.
          <br />
          <br />
          <br />
          Last Modified: July 03, 2021 00:04
          <br />
          <br /> <br />
          <br /> <br />
          <br />
          Was this article helpful?{" "}
          <i
            className="fa fa-thumbs-up"
            style={{
              border: "1ps solid lightgray",
              padding: "5px",
              backgroundColor: "lightgray",
              borderRadius: "5px",
              margin: "3px",
            }}
          ></i>
          <i
            className="fa fa-thumbs-down"
            style={{
              border: "1ps solid lightgray",
              padding: "5px",
              backgroundColor: "lightgray",
              borderRadius: "5px",
              margin: "3px",
            }}
          ></i>
          out of 10 found this helpful
        </div>
        <div className="addSection" style={{ fontSize: "12px" }}>
          <div className="" style={{ padding: "20px" }}>
            <div style={{ padding: "5px", backgroundColor: "#506383" }}>
              Recently viewed articles
            </div>
            <div
              style={{
                padding: "5px",
                backgroundColor: "lightgray",
                height: "50px",
              }}
            >
              -Coronavirus: uSell Precautions
            </div>
          </div>{" "}
          <div className="" style={{ padding: "20px" }}>
            <div style={{ padding: "5px", backgroundColor: "#506383" }}>
              Related articles
            </div>
            <div
              style={{
                padding: "5px",
                backgroundColor: "lightgray",
                height: "200px",
              }}
            >
              -How do I buy wholesale iPhones in bulk?
              <br />
              -Can I buy a phone?
              <br />
              -How do I turn off Find My iPhone remotely in iCloud?
              <br />
              -How do I disable Samsung Re-activation Lock from my device?
              <br />
              -Coronavirus: uSell Precautions
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeABuyer;
