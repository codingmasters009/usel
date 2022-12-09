import React from "react";
import "./general.css";

const Track = () => {
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
        <div>
          <div className="gHeader">
            <h2>Find your order to track</h2>
          </div>
          <div className="TdivideSection">
            <div className="TdivideSectionleft">
              <div>Quickly lookup the current status for uSell order</div>
              <div>
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Check me out
                    </label>
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
                      Track Order
                    </button>
                  </center>
                </form>
              </div>
            </div>
            <div className="TdivideSectionright">
              <b>Get the full scoop by signing up</b>
              <br />
              <br />
              Another way to check on your order is to signup or login to a
              uSell account. By logging in, you can also view the secure
              information tied to your order (i.e your address) and access any
              other orders tied to your account.
              <br />
              <br />
              <b>Having a uSell account helps you to securely</b>
              <br />
              - Track your package
              <br />
              - Monitor order progress
              <br />
              - Contact your buyer
              <br />- Leave buyer feedback <br />
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
                Creat a free uShell Account
              </button>
              <br />
              Already a member?<a href="#"> Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
