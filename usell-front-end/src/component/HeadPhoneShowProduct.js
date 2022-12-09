import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import a1 from "../images/tech/h1.jpg";
import a2 from "../images/tech/h2.jpg";
import a3 from "../images/tech/h3.jpg";
import a4 from "../images/tech/h4.jpg";
import a5 from "../images/tech/h5.jpg";
import a6 from "../images/tech/h6.jpg";
import a7 from "../images/tech/h7.jpg";
import a8 from "../images/tech/h8.jpg";

// import a2 from "../images/tech/cl4.jpg";
// import a3 from "../images/tech/cl5.jpg";
// import a5 from "../images/tech/at5.jpg";

import varientInfo from "../images/varientInfo.png";
import "./general.css";

const HeadPhoneShowProduct = () => {
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
                            Apple Airpods 1st Gen MMEF2AMA
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
                          <img src={a2} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple Airpods 2 with Case MV7N2AMA
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
                          <img src={a3} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple Airpods 2 with Wireless MRXJ2AMA
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
                          <img src={a4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple Airpods Pro MWP22AMA
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
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Bose QuietComfort 35
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
                          <img src={a6} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Bose QuietComfort 35 II
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </div>
              ) : cat == 3 ? (
                <div style={{ display: "flex" }}>
                  <div className="productView">
                    <Link to="/ComputerParaphielSubCategory/1" className=" ">
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a7} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Beats Solo3 Wireless
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
                          <img src={a8} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Beats Studio3 Wireless
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

export default HeadPhoneShowProduct;
