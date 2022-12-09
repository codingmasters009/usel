import React from "react";
import "./general.css";
import mob1 from "../images/mob1.png";
import mob2 from "../images/mob2.png";
const MeetOurBuyer = () => {
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
        <h2>We Buy Old Cell Phones</h2>
      </div>
      <div className="mobbody">
        <div className="mobMain">
          <h4>Our Marketplace of Trusted Services</h4>
          <br />
          <div
            style={{
              backgroundColor: "lightgrey",
              padding: "10px",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          >
            <div className="">
              Each service listed below is a top rated professional organization
              with proven expertise in customer service and refurbishing devices
              in large quantities. The uSell marketplace instantly matches you
              with the service that has the best offer to sell your iPhone, sell
              your cell phone, or sell other devices. Every time you sell, you
              can expect free shipping, quick payment, and responsive customer
              support.
            </div>
            <div>
              <center>
                {" "}
                <button
                  type="button"
                  className="btn"
                  style={{
                    marginTop: "25px",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "20px",
                    backgroundColor: "#00D2A8",
                    padding: "5px 30px",
                    borderRadius: "15px",
                    // borderBottomLeftRadius: "15px",
                    borderBottom: "5px solid darkblue",
                  }}
                  //   style={{ backgroundColor: "#00D2A8" }}
                >
                  Get started selling your phone
                </button>
              </center>
            </div>
          </div>
          <div className="mobImg1">
            <img src={mob1} alt="Girl in a jacket" style={{ width: "100%" }} />
          </div>
          <div className="mobImg1">
            <img src={mob2} alt="Girl in a jacket" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="addSection">
          <div
            className=""
            style={{
              border: "1px solid lightgrey",
              padding: "10px",
              margin: "10px",
              marginTop: "100px",
            }}
          >
            <center>
              <div>
                <b>list of Services</b>
                <br />
                <a href="#">uSell.com</a>
              </div>{" "}
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurBuyer;
