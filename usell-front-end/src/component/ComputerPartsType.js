import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import a1 from "../images/tech/cp1.jpg";
import a2 from "../images/tech/cp2.jpg";

// import a5 from "../images/tech/at5.jpg";

import varientInfo from "../images/varientInfo.png";
import "./general.css";

const ComputerPartsType = () => {
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
                <Link
                  to="/GraphicCardVarient/  Graphics Card Nvidia"
                  className=" "
                >
                  <center>
                    <div className="productViewSectionImg">
                      <img src={a1} alt="Girl in a jacket" />
                    </div>
                    <center>
                      <div className="textColor productViewSectionText">
                        Graphics Card
                      </div>
                      {/* <div className="OfferDesign">Find Offers</div> */}
                    </center>
                  </center>
                </Link>
              </div>
              <div className="productView">
                <Link to="/HardDriveVarient/ Hard Drive SSD" className=" ">
                  <center>
                    <div className="productViewSectionImg">
                      <img src={a2} alt="Girl in a jacket" />
                    </div>
                    <center>
                      <div className="textColor productViewSectionText">
                        Hard Drive
                      </div>
                      {/* <div className="OfferDesign">Find Offers</div> */}
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

export default ComputerPartsType;
