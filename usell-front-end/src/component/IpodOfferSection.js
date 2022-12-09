import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import a1 from "../images/ipod/c1.jpg";
import a2 from "../images/ipod/c2.jpg";
import a3 from "../images/ipod/c3.jpg";
import a4 from "../images/ipod/6.jpg";
import a5 from "../images/ipod/c3.jpg";
import a6 from "../images/ipod/c6.jpg";
import an1 from "../images/ipod/n01.jpg";
import an3 from "../images/ipod/n3.jpg";
import an2 from "../images/ipod/n02.jpg";
import an4 from "../images/ipod/n04.jpg";
import an5 from "../images/ipod/n05.jpg";
import an6 from "../images/ipod/n06.jpg";
import an7 from "../images/ipod/n07.jpg";
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
const IpodOfferSection = () => {
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
                      to="/IpadCashOffer/ Apple iPod Classic 7th Generation 120GB/001"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a1} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 7th Generation 120GB
                          </div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Classic 7th Generation 160GB/002"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a1} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 7th Generation 160GB
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
                      to="/IpadCashOffer/ Apple iPod Classic 6th Generation 80GB/005"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a2} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 6th Generation 80GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Classic 6th Generation 120GB/006"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a2} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 6th Generation 120GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Classic 6th Generation 160GB/007"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a2} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 6th Generation 160GB
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
                      Apple iPod Classic 5th Generation 30GB/009"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a3} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 5th Generation 30GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Classic 5th Generation 60GB/010"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a3} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 5th Generation 60GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      Apple iPod Classic 5th Generation 80GB/011"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a3} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 5th Generation 80GB
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
                      Apple iPod Classic 4th Generation 30GB/013"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 4th Generation 30GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Classic 4th Generation 20GB/014"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 4th Generation 20GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      Apple iPod Classic 4th Generation 40GB/015"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 4th Generation 40GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      Apple iPod Classic 4th Generation 60GB/016"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 4th Generation 60GB
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
                      Apple iPod Classic 3rd Generation 30GB/017"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 3rd Generation 30GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      Apple iPod Classic 3rd Generation 10GB/018"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 3rd Generation 10GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      Apple iPod Classic 3rd Generation 15GB/019"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 3rd Generation 15GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Classic 3rd Generation 20GB/020"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 3rd Generation 20GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/
                      Apple iPod Classic 3rd Generation 40GB/021"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 3rd Generation 40GB
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
                      Apple iPod Classic 2nd Gen 10GB (Touch Wheel)/022"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a6} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 2nd Gen 10GB (Touch Wheel)
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Classic 2nd Gen 20GB (Touch Wheel)/023"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={a6} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Classic 2nd Gen 20GB (Touch Wheel)
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
                      to="/IpadCashOffer/Apple iPod Nano 7th Generation 16GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an1} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 7th Generation 16GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 8 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 6th Generation 8GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an2} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 6th Generation 8GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 6th Generation 16GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an2} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 6th Generation 16GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 9 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 5th Generation 16GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an3} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 5th Generation 16GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 5th Generation 8GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an3} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 5th Generation 8GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 10 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 4th Generation 16GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 4th Generation 16GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 4th Generation 8GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an4} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 4th Generation 8GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 11 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 3rd Generation 4GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 3rd Generation 4GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 3rd Generation 8GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an5} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 3rd Generation 8GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 12 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 2nd Generation 8GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an6} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 2nd Generation 8GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 2nd Generation 4GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an6} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 2nd Generation 4GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 2nd Generation 2GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an6} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 2nd Generation 2GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : id == 13 ? (
                <>
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 1st Generation 1GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an7} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 1st Generation 1GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 1st Generation 2GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an7} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 1st Generation 2GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>{" "}
                  <div className="productView">
                    <Link
                      to="/IpadCashOffer/Apple iPod Nano 1st Generation 4GB/030"
                      className=" "
                    >
                      <center>
                        <div className="productViewSectionImg">
                          <img src={an7} alt="Girl in a jacket" />
                        </div>
                        <center>
                          <div className="textColor productViewSectionText">
                            Apple iPod Nano 1st Generation 4GB
                          </div>
                          <div className="OfferDesign">Find Offers</div>
                        </center>
                      </center>
                    </Link>
                  </div>
                </>
              ) : null}
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default IpodOfferSection;
