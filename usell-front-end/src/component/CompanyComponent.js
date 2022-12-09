import React from "react";
import { Link } from "react-router-dom";
import "./general.css";
const CompanyComponent = () => {
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
        <h2>About us</h2>
      </div>
      <div className="gdivideSection" style={{}}>
        <div className="gleftsection">
          <h2 style={{ color: "#506383" }}>
            Compare offers from professional buyers, instantly.
          </h2>
          <br />
          <b style={{ color: "black" }}>
            Sell your old gadgets, so you can buy new ones.
          </b>
          <br />
          At uSell, our mission is to transform the way people change up their
          technology. We make it easy for you to sell your used gadgets, by
          connecting you with hundreds of professional buyers, so you can get
          the best offers. uSell lets you sell your old things, so you can use
          the cash to buy new things, while doing good for the environment.
          <br />
          <b style={{ color: "black" }}>Selling is easy</b>
          <br />
          Find the best offers instantly. Choose a buyer. Send in your gadget
          for free. Get paid in cash, fast! It's that simple.
          <br />
          <b style={{ color: "black" }}>Get the highest prices</b>
          <br />
          We bring the most reputable buyers onto one platform. Buyers compete
          to buy your gadgets, and the offers we list are the highest in the
          industry.
          <br />
          <b style={{ color: "black" }}>Rest assured</b>
          <br />
          Our buyers are professional organizations with positive user reviews
          and stellar customer service. Your information is kept secured and
          never shared.
        </div>
        <div className="grightsection">
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
        </div>
      </div>
    </div>
  );
};

export default CompanyComponent;
