import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import a1 from "../images/tech/mouse.jpg";
import a2 from "../images/tech/keyboard.jpg";
// import a2 from "../images/tech/cl4.jpg";
// import a3 from "../images/tech/cl5.jpg";
// import a5 from "../images/tech/at5.jpg";

import varientInfo from "../images/varientInfo.png";
import "./general.css";

const ComputerPeraphil = () => {
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
                <Link to="/ComputerParaphielSubCategory/1" className=" ">
                  <center>
                    <div className="productViewSectionImg">
                      <img src={a1} alt="Girl in a jacket" />
                    </div>
                    <center>
                      <div className="textColor productViewSectionText">
                        Mouse
                      </div>
                      <div className="OfferDesign">Find Offers</div>
                    </center>
                  </center>
                </Link>
              </div>
              <div className="productView">
                <Link to="/ComputerParaphielSubCategory/2" className=" ">
                  <center>
                    <div className="productViewSectionImg">
                      <img src={a2} alt="Girl in a jacket" />
                    </div>
                    <center>
                      <div className="textColor productViewSectionText">
                        Keyboard
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

export default ComputerPeraphil;
