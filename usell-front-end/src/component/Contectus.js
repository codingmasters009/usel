import React from "react";
import "./general.css";

const Contectus = () => {
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
        <h2>Contect Us</h2>
      </div>
      <div className="contactusRoot">
        <div>
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Your Name</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>{" "}
            <div className="form-group">
              <label for="exampleFormControlInput1">
                What can we help with{" "}
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>{" "}
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Order</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
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
                Submit
              </button>
            </center>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default Contectus;
