import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import a1 from "../images/tech/aa1.jpg";
import a2 from "../images/tech/aa2.jpg";
import a3 from "../images/tech/aa3.jpg";

import varientInfo from "../images/varientInfo.png";
import "./general.css";
const ApplePancilVarient = () => {
  let { cat } = useParams();
  return (
    <div>
      <div className="ProductVarientRoot">
        <div className="ProductVarientHeader">
          <div className="VarientHeaderTitle" style={{}}>
            Sell Your {cat} Online for Cash
          </div>
          <div style={{ paddingLeft: "150px", fontSize: "12px" }}>
            How can I find out my {cat} series?
          </div>
        </div>
        <div className="ProductVarientdiv">
          <center>
            <div className="ProductVarientGrid">
              <div className="productView">
                <Link to="/Varientipad/ipad" className=" ">
                  <center>
                    <div className="productViewSectionImg">
                      <img src={a1} alt="Girl in a jacket" />
                    </div>
                    <center>
                      <div className="textColor productViewSectionText">
                        Apple Pencil 2nd Generation A2051
                      </div>
                      <div className="OfferDesign">Find Offers</div>
                    </center>
                  </center>
                </Link>
              </div>
              <div className="productView">
                <Link to="/Varientipad/ipad" className=" ">
                  <center>
                    <div className="productViewSectionImg">
                      <img src={a1} alt="Girl in a jacket" />
                    </div>
                    <center>
                      <div className="textColor productViewSectionText">
                        Apple Pencil 1st Generation A1603
                      </div>
                      <div className="OfferDesign">Find Offers</div>
                    </center>
                  </center>
                </Link>
              </div>
            </div>
          </center>
        </div>
        <div className="productInfo">
          {/* <div style={{ width: "50%" }}></div> */}
          <div style={{ width: "100%" }}>
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

export default ApplePancilVarient;
