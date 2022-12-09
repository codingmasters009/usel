import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import "./general.css";
import a1 from "../images/tech/aa.jpg";
import priceData from "../data/priceData.json";
import offersData from "../data/images/dynamic/offers.json";
import { config } from "../config/config";

const PriceOffer = () => {
  let [data, setdata] = useState([]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  goToTop();
  let { id } = useParams();
  let [useData, setuseData] = useState([]);
  let [damage, setdamage] = useState([]);
  let [good, setgood] = useState([]);
  let [flawless, setflawless] = useState([]);
  let [price, setprice] = useState();
  let [catTitle, setcatTitle] = useState(0);

  const getdata = () => {
    // localStorage.getItem("vid", id);

    let url = config.baseURL + "data/product?offId=" + id;
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
    <div className="OfferPage">
      <div className="ProductVarientHeader">
        <div className="VarientHeaderTitle" style={{}}>
          Sell Your {id}
        </div>
        <div style={{ paddingLeft: "150px", fontSize: "12px" }}>
          How can I find out my series? {id}
        </div>
      </div>
      <div className="OfferBodyDivision">
        {/* <div className="leftsideProductView">
          <div className="productView">
            {/* {offersData.map((value, index) => {
              return (
                <div>
                  {value.id == id ? (
                    <div>
                      <center>
                        <div className="productViewSectionImg">
                          <img
                            crossorigin="anonymous"
                            src={value.img_url}
                            alt="Girl in a jacket"
                          />
                        </div>
                        <center>
                          <div className="">{value.title}</div>
                        </center>
                      </center>
                    </div>
                  ) : null}
                </div>
              );
            })}  
          </div>
        </div> */}

        <div className="rightsideProductView">
          <div className="container mt-3">
            <ul className="nav nav-tabs" role="tablist">
              {data.map((value, index) => {
                return (
                  <li
                    className="nav-item"
                    onClick={(e) => {
                      setprice(value.product_price);
                      setcatTitle(value.product_id);
                    }}
                  >
                    <a
                      className="nav-link "
                      data-bs-toggle="tab"
                      href={`#m${value.product_id}`}
                    >
                      <i className="fa fa-dot-circle-o  "></i>{" "}
                      {value.product_condition}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="tab-content">
              {data.map((value, index) => {
                return (
                  <div
                    id={`m${value.product_id}`}
                    className="container tab-pane active"
                  >
                    <br />
                    {/* <p>{damage[1]}</p> <br />
                    <p>{damage[2]}</p> <br />
                    <p>{damage[3]}</p> <br /> */}
                    <p>{value.product_decsription}</p>
                    {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
                  </div>
                );
              })}

              {/* <div id="menu1" className="container tab-pane fade">
                <br />
                <h3>{good[1]}</h3>
                <p>{good[2]}</p>
                <p>{good[3]}</p>
              </div> */}
              {/* <div id="menu2" className="container tab-pane fade">
                <br />
                <h3>{flawless[1]}</h3>
                <p>{flawless[2]}</p>
                <p>{flawless[3]}</p>
              </div> */}
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
                <h1>{price}</h1>
                <center>
                  <Link to={"/PaymentMethod/" + catTitle} className=" ">
                    <button
                      type="button"
                      className="btn "
                      style={{
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "20px",
                        backgroundColor: "#F54C45",
                        padding: "20px 30px",
                        borderRadius: "15px",
                        // borderBottomLeftRadius: "15px",
                        borderBottom: "5px solid darkred",
                      }}
                    >
                      Get Paid
                    </button>
                  </Link>
                </center>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default PriceOffer;
