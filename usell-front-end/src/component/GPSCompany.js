import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

import a1 from "../images/tech/gc1.png";
import a2 from "../images/tech/gc2.png";
import a3 from "../images/tech/gc3.png";

// import a2 from "../images/tech/cl4.jpg";
// import a3 from "../images/tech/cl5.jpg";
// import a5 from "../images/tech/at5.jpg";

import varientInfo from "../images/varientInfo.png";
import "./general.css";

const GPSCompany = () => {
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
              <div style={{ display: "flex" }}>
                <div className="productView">
                  <Link to="/GPSshowProduct/1" className=" ">
                    <center>
                      <div className="productViewSectionImg">
                        <img src={a1} alt="Girl in a jacket" />
                      </div>
                      <center>
                        {/* <div className="textColor productViewSectionText">
                          Logitech G700S Mouse
                        </div> */}
                        {/* <div className="OfferDesign">Find Offers</div> */}
                      </center>
                    </center>
                  </Link>
                </div>
                <div className="productView">
                  <Link to="/GPSshowProduct/2" className=" ">
                    <center>
                      <div className="productViewSectionImg">
                        <img src={a2} alt="Girl in a jacket" />
                      </div>
                      <center>
                        {/* <div className="textColor productViewSectionText">
                          Razer Naga Epic Chroma Mouse
                        </div> */}
                        {/* <div className="OfferDesign">Find Offers</div> */}
                      </center>
                    </center>
                  </Link>
                </div>{" "}
                <div className="productView">
                  <Link to="/GPSshowProduct/3" className=" ">
                    <center>
                      <div className="productViewSectionImg">
                        <img src={a3} alt="Girl in a jacket" />
                      </div>
                      <center>
                        {/* <div className="textColor productViewSectionText">
                          Razer Naga Epic Chroma Mouse
                        </div> */}
                        {/* <div className="OfferDesign">Find Offers</div> */}
                      </center>
                    </center>
                  </Link>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default GPSCompany;
