import React from "react";
import { useParams } from "react-router-dom";
import "./general.css";
import { Link } from "react-router-dom";

/////////////////////////import images
import ipad01 from "../images/ipad01.png";
import ipad02 from "../images/ipad02.png";
import ipad03 from "../images/ipad03.png";
import ipad04 from "../images/ipad04.png";
import ipad05 from "../images/ipad05.png";
import ipad06 from "../images/ipad06.png";
import ipad07 from "../images/ipad07.png";
import ipad08 from "../images/ipad08.png";
import ipad09 from "../images/ipad09.png";
import ipad10 from "../images/ipad10.png";
import ipad11 from "../images/ipad11.png";
import ipad12 from "../images/ipad12.png";
import ipad13 from "../images/ipad13.png";
import ipad14 from "../images/ipad14.png";
import ipad15 from "../images/ipad15.png";
import ipad16 from "../images/ipad16.png";
import ipad17 from "../images/ipad17.png";
import ipad18 from "../images/ipad18.png";
import ipad19 from "../images/ipad19.png";
import ipad20 from "../images/ipad20.png";
import ipad21 from "../images/ipad21.png";
import ipad22 from "../images/ipad22.png";

import varientInfo from "../images/varientInfo.png";

const Varientipad = () => {
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
          <div className="ProductVarientGrid">
            {" "}
            <div className="productView">
              <Link
                to="/IpadConditionSelection/iPad 8th Generation/1"
                className=" "
              >
                <center>
                  <img src={ipad01} alt="Girl in a jacket" />
                  <div className="textColor">iPad 8th Generation </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link
                to="/IpadConditionSelection/iPad 7th Generation/2"
                className=" "
              >
                <center>
                  <img src={ipad02} alt="Girl in a jacket" />
                  <div className="textColor">iPad 7th Generation</div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link
                to="/IpadConditionSelection/iPad 6th Generation/3"
                className=" "
              >
                <center>
                  <img src={ipad03} alt="Girl in a jacket" />
                  <div className="textColor">iPad 6th Generation </div>
                </center>{" "}
              </Link>
            </div>{" "}
            <div className="productView">
              <Link
                to="/IpadConditionSelection/iPad 5th Generation/4"
                className=" "
              >
                <center>
                  <img src={ipad04} alt="Girl in a jacket" />
                  <div className="textColor">iPad 5th Generation </div>
                </center>{" "}
              </Link>
            </div>{" "}
            <div className="productView">
              <Link to="/IpadConditionSelection/iPad Air 3/5" className=" ">
                <center>
                  <img src={ipad05} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Air 3</div>
                </center>{" "}
              </Link>
            </div>{" "}
            <div className="productView">
              <Link to="/IpadConditionSelection/iPad Air 2/6" className=" ">
                <center>
                  <img src={ipad06} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Air 2</div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link to="/IpadConditionSelection/ iPad Air/7" className=" ">
                <center>
                  <img src={ipad07} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor"> iPad Air</div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link to="/IpadConditionSelection/iPad Mini 5/8" className=" ">
                {" "}
                <center>
                  <img src={ipad08} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Mini 5 </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link to="/IpadConditionSelection/iPad Mini 4/9" className=" ">
                {" "}
                <center>
                  <img src={ipad09} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Mini 4 </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link to="/IpadConditionSelection/iPad Mini 3/10" className=" ">
                <center>
                  <img src={ipad10} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Mini 3 </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link
                to="/IpadConditionSelection/iPad Mini with Retina Display/11"
                className=" "
              >
                <center>
                  <img src={ipad11} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Mini with Retina Display</div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link to="/IpadConditionSelection/iPad Mini /12" className=" ">
                <center>
                  <img src={ipad12} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Mini </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link
                to="/IpadConditionSelection/iPad Pro 4th Gen/13"
                className=" "
              >
                {" "}
                <center>
                  <img src={ipad13} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Pro 4th Gen </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link
                to="/IpadConditionSelection/iPad Pro 3th Gen/14"
                className=" "
              >
                {" "}
                <center>
                  <img src={ipad14} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Pro 3th Gen </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link
                to="/IpadConditionSelection/iPad Pro 2th Gen/15"
                className=" "
              >
                <center>
                  <img src={ipad15} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Pro 2th Gen </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link
                to="/IpadConditionSelection/iPad Pro 10.5 inch/16"
                className=" "
              >
                {" "}
                <center>
                  <img src={ipad16} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Pro 10.5 inch</div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link
                to="/IpadConditionSelection/iPad Pro 12.9 inch/17"
                className=" "
              >
                <center>
                  <img src={ipad17} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Pro 12.9 inch </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link
                to="/IpadConditionSelection/iPad Pro 1st Gen/18"
                className=" "
              >
                <center>
                  <img src={ipad18} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad Pro 1st Gen </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link to="/IpadConditionSelection/iPad 4/19" className=" ">
                <center>
                  <img src={ipad08} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad 4 </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link to="/IpadConditionSelection/iPad 3 /20" className=" ">
                <center>
                  <img src={ipad20} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad 3 </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link to="/IpadConditionSelection/iPad 2/21" className=" ">
                <center>
                  <img src={ipad21} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad 2 </div>
                </center>
              </Link>
            </div>{" "}
            <div className="productView">
              <Link to="/IpadConditionSelection/iPad 1/22" className=" ">
                <center>
                  <img src={ipad22} alt="Girl in a jacket" />
                </center>
                <center>
                  <div className="textColor">iPad 1 </div>
                </center>
              </Link>
            </div>
          </div>
        </div>
        <div className="productInfo">
          <div style={{ width: "50%" }}>
            {cat == "ipad" ? (
              <div className="productdata">
                <b>Our Apple iPad Trade in & Buyback Program</b> <br />
                If you're looking for an Apple iPad trade-in or buyback program,
                you've come to the right place. To get the process started,
                click on the Apple iPad series above that matches the device you
                want to sell. You will then need to specify the model and the
                condition of your device. uSell instantly matches you with the
                top iPad trade in value from its marketplace of buyers. The
                whole process takes less than one minute! Whether you're trying
                to sell your old iPad Air or even your shiny new iPad Mini, you
                will find professional buyers looking to give you cash for your
                Apple iPad device on uSell.
              </div>
            ) : cat == "macbook" ? (
              <div className="productdata">
                <b>Our MacBook Trade-In Program</b> <br />
                Are you looking to upgrade to a new Apple MacBook or just want
                to sell your old Mac? Let uSell.com help you find the best offer
                for your Apple MacBook. With our Macbook trade-in program, we
                have professional buyers who are ready to give you top dollar
                for your old MacBook - don't trade it in your Apple laptop for
                store credit when you can use uSell to get cash. <br />
                <br />
                <b>How can I sell my Mac? You are</b>
                moments away from finding the best offer for your Apple MacBook
                - just choose your MacBook model and tell us about the condition
                of your device. Then all you have to do is select your preferred
                offer, send in your MacBook and get paid!
              </div>
            ) : cat == "computer" ? (
              <div className="productdata">
                <b>Our Apple Computer Trade-In Program</b> <br />
                Are you looking to upgrade to a new Apple Computer or just want
                to sell your old Apple Computer? Let uSell.com help you find the
                best offer for your Apple Computer. With our Apple Computer
                trade-in program, we have professional buyers who are ready to
                give you top dollar for your old Apple Computer - don't trade it
                in your Apple Computer for store credit when you can use uSell
                to get cash.
                <br />
                <br />
                <b>How can I sell my Apple Computer? </b>
                <br />
                You are moments away from finding the best offer for your Apple
                Computer - just choose your Apple Computer model and tell us
                about the condition of your device. Then all you have to do is
                select your preferred offer, send in your Apple Computer and get
                paid!
              </div>
            ) : cat == "watch" ? (
              <div className="productdata">
                <b>Apple Watch Trade-in Program </b>
                <br />
                At uSell.com, selling your used Apple Watch is safe and hassle
                free. You will first be required to choose the Series of your
                Apple Watch. The next step is to choose the size and type of
                case your smartwatch has. Apple released the original 2015
                through Series 3 watches in 2 distinct case sizes: 38mm and
                42mm. The Series 4 watch was the first to increase the case size
                to 40mm and 44mm. The cases were available in aluminum,
                stainless steel, and ceramic. The Series 3 and Series 4 could
                also be upgraded to be configured with cellular capability. Get
                the most cash for your old Apple Watch with uSellcom. Find out
                how much your device is worth by choosing the condition that
                most accurately reflects the model you have to sell. You'll
                receive an upfront offer for your trade-in and the price is
                guaranteed for 30 days. Make sure to include your Apple Watch
                charging cable.
              </div>
            ) : cat == "ipod" ? (
              <div className="productdata">
                <b>Our iPod Trade-in Program</b>
                <br />
                At uSell.com, selling iPods is quick and hassle free. First
                select your iPod series (iPod Classic, iPod Mini, iPod Touch,
                iPod Nano, or iPod Shuffle) from the list above, and then we
                will guide you through specifying the correct generation,
                storage capacity, and condition of your iPod. With uSell's iPod
                trade-in program, you will instantly find the top offer for your
                Apple iPod. To sell your ipod, all you have to do is choose your
                iPod model, tell us if you're selling a good or broken iPod,
                then checkout and get paid.
                <br />
                <br />
                Popular search items: sell ipod touch, sell your iphone, what
                iPad do I have
              </div>
            ) : cat == "tablet" ? (
              <div className="productdata">
                <b>Tablet Trade-In Program</b>
                <br />
                At uSell.com, you can get cash for tablets quickly and without
                any hassle. Our tablet trade-in program enables you to sell
                Samsung Galaxy Tab, sell your kindle fire, nook color, or other
                device in just a few clicks. Select the brand of the tablet you
                are selling from the list above, and we'll guide you through
                identifying the correct model and condition. You'll instantly
                see the top offer for your tablet, and you can lock in a price
                that's guaranteed for 30 days.
              </div>
            ) : cat == "GameConsole" ? (
              <div className="productdata">
                <b>Our Game Console Trade-In Program</b>
                <br />
                At uSell.com, you can sell game consoles quickly and without any
                hassle. Our game console trade-in program enables you to sell
                your Sony PSP, sell Nintendo DS, or other game console in just a
                few clicks. Select the brand of the console you are selling from
                the list above, and we'll guide you through identifying the
                correct model and condition. You will then be presented with
                offers from uSell's network of professional buyers. You pick who
                to sell your gaming console to based on the prices offered and
                user reviews from other sellers.
                <br />
                <br />
                Accept a cash offer for your gaming console on uSell, and we'll
                help you out with free shipping. Mail in your device, and as
                long as it matches your description, the buyer will issue you
                payment by Paypal or check within 5 days of receiving your
                device. For your peace of mind, uSell sends you email updates
                every step of the way. The process of accepting an offer takes
                less than one minute!
                <br />
                <br />
                Trending Search Terms: sell apple laptop, sell broken iphone,
                sell iPhone 5
              </div>
            ) : cat == "camera" ? (
              <div className="productdata">
                <b> Sell Your Cameras</b>
                <br />
                When you sell cameras and other electronics through uSell, the
                process is quick, rewarding, and hassle free. The first step in
                getting cash for your camera is to select the brand of the
                camera you are selling from the list above. You will then need
                to specify the model and the condition of your device. uSell
                searches its network of professional buyers to find you the top
                offers in the market. You pick who to sell your camera to based
                on the prices offered and user reviews from other sellers. The
                whole process takes less than one minute!
              </div>
            ) : cat == "computer2" ? (
              <div className="productdata">
                <b>Our Computer Trade-In Program</b>
                <br />
                Are you looking to upgrade to a new Computer or just want to
                sell your old Computer? Let uSell.com help you find the best
                offer for your Computer. With our Computer trade-in program, we
                have professional buyers who are ready to give you top dollar
                for your old Computer - don't trade it in your Computer for
                store credit when you can use uSell to get cash.
                <br />
                <br />
                <b>How can I sell my Computer?</b>
                <br />
                You are moments away from finding the best offer for your
                Computer - just choose your Computer model and tell us about the
                condition of your device. Then all you have to do is select your
                preferred offer, send in your Computer and get paid!
              </div>
            ) : null}
          </div>
          <div style={{ width: "50%" }}>
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

export default Varientipad;
