import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import a1 from "../images/tech/g1.jpg";
import a2 from "../images/tech/g2.jpg";
import a3 from "../images/tech/g3.jpg";
import a4 from "../images/tech/g4.jpg";

// import a2 from "../images/tech/cl4.jpg";
// import a3 from "../images/tech/cl5.jpg";
// import a5 from "../images/tech/at5.jpg";

import varientInfo from "../images/varientInfo.png";
import "./general.css";

const GPSshowProduct = () => {
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
              {cat == 1 ? (
                <div style={{ display: "flex" }}>
                  <div className="productView">
                    <Link to="/ComputerParaphielSubCategory/1" className=" ">
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a1} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Garmin Drive 50
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link to="/ComputerParaphielSubCategory/1" className=" ">
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a3} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Garmin Oregon 750
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link to="/ComputerParaphielSubCategory/1" className=" ">
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a2} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Garmin Nuvi 57
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </div>
              ) : cat == 2 ? (
                <div style={{ display: "flex" }}>
                  <div className="productView">
                    <Link to="/ComputerParaphielSubCategory/1" className=" ">
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Magellan Roadmate 9416T-LM
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </div>
              ) : cat == 3 ? (
                <div>
                  <div className="productView">
                    <Link to="/ComputerParaphielSubCategory/1" className=" ">
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            TomTom Rider 550
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default GPSshowProduct;
