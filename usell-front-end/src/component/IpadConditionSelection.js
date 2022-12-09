import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import a1 from "../images/ipad01.png";
import a3 from "../images/ipad14.png";
import a4 from "../images/ipad06.png";
import a5 from "../images/ipad10.png";
import a7 from "../images/ipad1.png";
import a9 from "../images/ipad09.png";
import a13 from "../images/ipad13.png";
import a14 from "../images/ipad23.jpg";
import a15 from "../images/ipad06.png";
import a16 from "../images/ipad21.png";
import a17 from "../images/ipad17.png";
import a18 from "../images/ipad09.png";
import a19 from "../images/ipad20.png";
import a20 from "../images/ipad20.jpg";
import a21 from "../images/ipad21.jpg";
import a22 from "../images/ipad20.png";

import data from "../data/ipadData.json";
import varientInfo from "../images/varientInfo.png";
import "./general.css";
const IpadConditionSelection = () => {
  let { cat, id } = useParams();

  return (
    <div>
      <div className="ProductVarientRoot">
        <div className="ProductVarientHeader">
          <div className="VarientHeaderTitle">
            Sell Your {cat} Online for Cash
          </div>
          <div style={{ paddingLeft: "150px", fontSize: "12px" }}>
            Select the carrier or WiFi Only for Your {cat}
          </div>
        </div>
        <div className="ProductVarientdiv">
          <center>
            <div className="ProductVarientGrid">
              {id == 1 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/iPad 8th Generation 128GB WiFi + Cellular (Unlocked)/001"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a1} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 8th Generation 128GB WiFi + Cellular (Unlocked)
                          </div>
                          <div className="textColor productViewSectionText">
                            Factory Unlocked
                          </div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/iPad 8th Generation 32GB WiFi + Cellular (Unlocked)/002"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a1} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 8th Generation 32GB WiFi + Cellular (Unlocked)
                          </div>
                          <div className="textColor productViewSectionText">
                            Factory Unlocked
                          </div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      iPad 8th Generation 32GB WiFi/003"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a1} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 8th Generation 32GB WiFi
                          </div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      iPad 8th Generation 128GB WiFi/004"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a1} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 8th Generation 128GB WiFi
                          </div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 2 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/ iPad 7th Generation 32GB WiFi + Cellular (Unlocked)/005"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a1} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 7th Generation 32GB WiFi + Cellular (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/ iPad 7th Generation 128GB WiFi + Cellular (Unlocked)/006"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a1} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 7th Generation 128GB WiFi + Cellular (Unlocked)
                            Find Offers
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/ iPad 7th Generation 32GB WiFi  /007"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a1} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 7th Generation 32GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/ iPad 7th Generation 32GB WiFi  /008"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a1} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 7th Generation 128GB WiFi Find Offers
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 3 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      iPad 6th Generation 128GB WiFi + Cellular (Unlocked)/009"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a3} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 6th Generation 128GB WiFi + Cellular (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/iPad 6th Generation 32GB WiFi + Cellular (Unlocked)/010"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a3} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 6th Generation 32GB WiFi + Cellular (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      iPad 6th Generation 128GB WiFi/011"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a3} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 6th Generation 128GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      iPad 6th Generation 32GB WiFi/012"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a3} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 6th Generation 32GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 4 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      iPad 5th Generation 128GB WiFi + Cellular (Unlocked)/013"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 5th Generation 128GB WiFi + Cellular (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/iPad 5th Generation 32GB WiFi + Cellular (Unlocked)/014"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 5th Generation 32GB WiFi + Cellular (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      iPad 5th Generation 128GB WiFi/015"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 5th Generation 128GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      iPad 5th Generation 32GB WiFi/016"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad 5th Generation 32GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 5 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      
iPad Air 3 64GB WiFi + Cellular (Unlocked)/017"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad Air 3 64GB WiFi + Cellular (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      iPad Air 3 256GB WiFi + Cellular (Unlocked)/018"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad Air 3 256GB WiFi + Cellular (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      iPad Air 3 32GB WiFi + Cellular (Unlocked)/019"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad Air 3 32GB WiFi + Cellular (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/iPad Air 3 256GB WiFi/020"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad Air 3 256GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                    
iPad Air 3 64GB WiFi/021"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            iPad Air 3 64GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 6 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      

                      Apple iPad Air 2 128GB WiFi + 4G (Unlocked)/022"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 2 128GB WiFi + 4G (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      Apple iPad Air 2 16GB WiFi + 4G (Unlocked)/023"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 2 16GB WiFi + 4G (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      Apple iPad Air 2 32GB WiFi + 4G (Unlocked)/024"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 2 32GB WiFi + 4G (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPad Air 2 64GB WiFi + 4G (Unlocked)
                       /025"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 2 64GB WiFi + 4G (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                    

                      Apple iPad Air 2 16GB WiFi/026"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 2 16GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                    

                      
Apple iPad Air 2 64GB WiFi/027"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 2 64GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                    

                     
Apple iPad Air 2 128GB WiFi/028"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 2 128GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPad Air 2 32GB WiFi/029"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 2 32GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 7 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      

                     
Apple iPad Air 16GB WiFi + 4G (Other Carrier)/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a7} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 16GB WiFi + 4G (Other Carrier)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                    
Apple iPad Air 32GB WiFi + 4G (Other Carrier)/031"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a7} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 32GB WiFi + 4G (Other Carrier)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPad Air 64GB WiFi + 4G (Other Carrier)/032"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a7} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 64GB WiFi + 4G (Other Carrier)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      Apple iPad Air 128GB WiFi + 4G (Other Carrier)
                       /033"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a7} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 2 64GB WiFi + 4G (Unlocked)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPad Air 16GB WiFi/034"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a7} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 16GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      Apple iPad Air 32GB WiFi/035"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a7} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 32GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPad Air 64GB WiFi/036"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a7} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 64GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPad Air 128GB WiFi/036"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a7} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPad Air 128GB WiFi
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 8 ? (
                <>
                  {data.ipadmini5[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a5} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 9 ? (
                <>
                  {data.ipadmini4[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a9} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 10 ? (
                <>
                  {data.ipadmini3[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a4} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 11 ? (
                <>
                  {data.ipadretina[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a7} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 12 ? (
                <>
                  {data.ipadmini[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a7} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 13 ? (
                <>
                  {data.ipadpro4[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a13} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 14 ? (
                <>
                  {data.ipadpro3[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a14} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 15 ? (
                <>
                  {data.ipadpro2[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a15} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 16 ? (
                <>
                  {data.ipadpro10[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a16} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 17 ? (
                <>
                  {data.ipadpro12[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a17} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 18 ? (
                <>
                  {data.ipadpro1[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a18} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 19 ? (
                <>
                  {data.ipad4[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a19} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 20 ? (
                <>
                  {data.ipad3[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a20} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 21 ? (
                <>
                  {data.ipad2[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a21} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : id == 22 ? (
                <>
                  {data.ipad1[0].map((value, index) => {
                    return (
                      <div className="productView">
                        <Link
                          to={
                            "/IpadCashOffer/" +
                            value.device_Name +
                            "/" +
                            value.f_url
                          }
                          className=" "
                        >
                          <center>
                            <div className="productViewSectionImg">
                              <img src={a22} alt="Girl in a jacket" />
                            </div>
                            <center>
                              <div className="textColor productViewSectionText">
                                {value.device_Name}
                              </div>
                              <div className="OfferDesign">Find Offers</div>
                            </center>
                          </center>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : null}
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default IpadConditionSelection;
