import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import varientInfo from "../images/varientInfo.png";
import { Link } from "react-router-dom";
import a1 from "../images/tech/ssd.jpg";
import varientData from "../data/images/dynamic/varient.json";
import offersData from "../data/images/dynamic/offers.json";
import { config } from "../config/config";

const Offer = () => {
  let [data, setdata] = useState([]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  let { cat, id } = useParams();
  const getdata = () => {
    // localStorage.getItem("vid", id);

    let url =
      config.baseURL +
      "data/offer?varId=" +
      localStorage.getItem("vid") +
      "&camId=" +
      id;
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
    <div>
      <div className="OfferPage">
        <div className="ProductVarientHeader">
          <div className="VarientHeaderTitle">Sell Your {cat}</div>
          <div style={{ paddingLeft: "150px", fontSize: "12px" }}>
            How can I find out my {cat} series?
          </div>
        </div>
        <div className="OfferBodyDivision">
          {data.map((value, index) => {
            return (
              <div className="productView">
                <Link to={"/PriceOffer/" + value.offer_id} className=" ">
                  <center>
                    <div className="productViewSectionImg">
                      <img
                        // crossorigin="anonymous"
                        src={config.baseImg + value.offer_img}
                        style={{ width: "90%" }}
                        alt="Girl in a jacket"
                      />
                    </div>
                    <center>
                      <div className="textColor productViewSectionText">
                        {value.offer_name}
                      </div>
                      <div className="OfferDesign">Find Offers</div>
                    </center>
                  </center>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="productInfo">
          <div style={{ width: "50%" }}>
            <div>
              {varientData.map((value, index) => {
                return (
                  <div>
                    {value.id == id ? <div>{value.description}</div> : null}
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <center>
              {" "}
              <img
                src={varientInfo}
                // alt="Girl in a jacket"
                style={{ width: "100%", height: "200px", marginTop: "100px" }}
              />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
