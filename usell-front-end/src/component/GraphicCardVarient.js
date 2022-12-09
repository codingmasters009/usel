import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import a1 from "../images/tech/ngrtx.jpg";

import varientInfo from "../images/varientInfo.png";
import "./general.css";

const GraphicCardVarient = () => {
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
                        Nvidia GeForce RTX 2070
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
                        Nvidia GeForce RTX 2080 TI
                      </div>
                      <div className="OfferDesign">Find Offers</div>
                    </center>
                  </center>
                </Link>
              </div>{" "}
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default GraphicCardVarient;
