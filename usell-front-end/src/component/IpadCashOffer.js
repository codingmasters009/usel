import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import "./general.css";
import a1 from "../images/tech/aa.jpg";
import priceData from "../data/priceData.json";
const IpadCashOffer = () => {
  let { cat, id } = useParams();
  let [useData, setuseData] = useState([]);
  let [damage, setdamage] = useState([]);
  let [good, setgood] = useState([]);
  let [flawless, setflawless] = useState([]);
  let [price, setprice] = useState();

  const getData = () => {
    console.log(priceData[id]);
    setuseData(priceData[id]);
    setdamage(priceData[id].dameged[0]);
    setgood(priceData[id].good[0]);
    setflawless(priceData[id].flawless[0]);
    setprice(priceData[id].good[0][4]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="OfferPage">
      <div className="ProductVarientHeader">
        <div className="VarientHeaderTitle" style={{}}>
          Sell Your {cat}
        </div>
        <div style={{ paddingLeft: "150px", fontSize: "12px" }}>
          How can I find out my {cat} series? {id}
        </div>
      </div>
      <div className="OfferBodyDivision">
        <div className="leftsideProductView">
          {" "}
          <div className="productView">
            {/* <Link to="/AppleAssosries/Apple Accessories" className=" "> */}
            <center>
              <div className="productViewSectionImg">
                <img src={a1} alt="Girl in a jacket" />
              </div>
              <center>
                <div className="">Apple Accessories</div>
                {/* <div className="OfferDesign">Find Offers</div> */}
              </center>
            </center>
            {/* </Link> */}
          </div>
        </div>

        <div className="rightsideProductView">
          <div className="container mt-3">
            <ul className="nav nav-tabs" role="tablist">
              <li
                className="nav-item"
                onClick={(e) => {
                  setprice(damage[4]);
                }}
              >
                <a className="nav-link " data-bs-toggle="tab" href="#home">
                  <i className="fa fa-dot-circle-o  "></i> Damaged
                </a>
              </li>
              <li
                className="nav-item"
                onClick={(e) => {
                  setprice(good[4]);
                }}
              >
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#menu1"
                >
                  <i className="fa fa-dot-circle-o"></i> Good
                </a>
              </li>
              <li
                className="nav-item"
                onClick={(e) => {
                  setprice(flawless[4]);
                }}
              >
                <a className="nav-link" data-bs-toggle="tab" href="#menu2">
                  <i className="fa fa-dot-circle-o"></i> Flawless
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="home" className="container tab-pane active">
                <br />
                <p>{damage[1]}</p> <br />
                <p>{damage[2]}</p> <br />
                <p>{damage[3]}</p> <br />
                {/* <h3>{priceData}</h3> */}
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
              </div>
              <div id="menu1" className="container tab-pane fade">
                <br />
                <h3>{good[1]}</h3>
                <p>{good[2]}</p>
                <p>{good[3]}</p>
              </div>
              <div id="menu2" className="container tab-pane fade">
                <br />
                <h3>{flawless[1]}</h3>
                <p>{flawless[2]}</p>
                <p>{flawless[3]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="leftsideProductView">
          Your Cash Offer
          <br />
          <center>
            <div style={{ display: "flex" }}>
              <div>
                <span
                  style={{
                    fontSize: "18px",
                    padding: "5px",
                    fontWeight: "bolder",
                  }}
                >
                  $
                </span>
              </div>
              <div>
                {" "}
                <h1>{price}</h1>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default IpadCashOffer;
