import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import a1 from "../images/tech/k1.jpg";
import a2 from "../images/tech/k2.jpg";
import a3 from "../images/tech/k3.jpg";
import a4 from "../images/tech/k4.jpg";
import a5 from "../images/tech/k5.jpg";

import varientInfo from "../images/varientInfo.png";
import "./general.css";

const AppleKeyboardVarient = () => {
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
                        Apple Smart Keyboard Folio for iPad Pro 3rd Gen 11in
                        MU8G2LLA
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
                      <img src={a2} alt="Girl in a jacket" />
                    </div>
                    <center>
                      <div className="textColor productViewSectionText">
                        Apple Smart Keyboard Folio for iPad Pro 3rd Gen 12.9in
                        MU8H2LLA
                      </div>
                      <div className="OfferDesign">Find Offers</div>
                    </center>
                  </center>
                </Link>
              </div>{" "}
              <div className="productView">
                <Link to="/Varientipad/ipad" className=" ">
                  <center>
                    <div className="productViewSectionImg">
                      <img src={a3} alt="Girl in a jacket" />
                    </div>
                    <center>
                      <div className="textColor productViewSectionText">
                        Apple Smart Keyboard for iPad Pro 10.5in MPTL2LLA
                      </div>
                      <div className="OfferDesign">Find Offers</div>
                    </center>
                  </center>
                </Link>
              </div>{" "}
              <div className="productView">
                <Link to="/Varientipad/ipad" className=" ">
                  <center>
                    <div className="productViewSectionImg">
                      <img src={a4} alt="Girl in a jacket" />
                    </div>
                    <center>
                      <div className="textColor productViewSectionText">
                        Apple Smart Keyboard for iPad Pro 12.9in MJYR2LLA
                      </div>
                      <div className="OfferDesign">Find Offers</div>
                    </center>
                  </center>
                </Link>
              </div>{" "}
              <div className="productView">
                <Link to="/Varientipad/ipad" className=" ">
                  <center>
                    <div className="productViewSectionImg">
                      <img src={a5} alt="Girl in a jacket" />
                    </div>
                    <center>
                      <div className="textColor productViewSectionText">
                        Apple Smart Keyboard for iPad Pro 9.7in MM2L2AMA
                      </div>
                      <div className="OfferDesign">Find Offers</div>
                    </center>
                  </center>
                </Link>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default AppleKeyboardVarient;
