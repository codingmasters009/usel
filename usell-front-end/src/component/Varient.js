import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import varientInfo from "../images/varientInfo.png";
import { Link } from "react-router-dom";
import { config } from "../config/config";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
// import s1 from "../images/s1.png";
import varientData from "../data/images/dynamic/varient.json";
import categoryData from "../data/images/dynamic/category.json";
const Varient = () => {
  let { cat, id } = useParams();
  let [data, setdata] = useState([]);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  const getdata = () => {
    localStorage.setItem("vid", id);
    let url = config.baseURL + "data/vareint?catId=" + id;
    fetch(url, { mode: "cors" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setdata((data = data[0]));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    goToTop();
    getdata();
  }, []);

  return (
    <div>
      <div className="OfferPage">
        <div className="ProductVarientHeader">
          <div className="VarientHeaderTitle">Sell Your {cat}</div>
          <div style={{ paddingLeft: "150px", fontSize: "12px" }}>
            How can I find out my {cat} series?
          </div>
        </div>
        <div className="OfferBodyDivision">
          {data.map((value, index) => {
            return (
              <div className="productView">
                <Link
                  to={"/Company/" + value.varient_name + "/" + value.varient_id}
                  className=" "
                >
                  <center>
                    <div className="productViewSectionImg">
                      <img
                        // crossorigin="anonymous"
                        src={config.baseImg + value.varient_img}
                        // src={value.varient_img}
                        style={{ width: "90%" }}
                        alt="img not found"
                      />
                    </div>
                    <center>
                      <div className="textColor productViewSectionText">
                        {value.varient_name}
                      </div>
                      {/* <div className="OfferDesign">Find Offers</div> */}
                    </center>
                  </center>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="productInfo">
          <div style={{ width: "50%" }}>
            <div>
              {cat == "Phone" ? (
                <div>
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Mobile Phone Trade-In & Buyback
                  </div>
                  <p style={{ fontSize: "15px", color: "gray" }}>
                    Sell your mobile phone for cash at uSell.com. With our
                    mobile phone trade-in program, you can compare cash offers
                    from hundreds of professional buyers in seconds. We make it
                    easy for you to turn your old and unwanted cell phones into
                    cash, quickly and hassle-free.
                  </p>
                  <br />
                  <p style={{ fontSize: "15px", color: "gray" }}>
                    Start by selecting the brand of cell phone you are selling
                    from the list above, and then you'll be able to specify the
                    model and condition of your phone. We'll instantly match you
                    with the top offer for your device, and we'll send you a
                    postage-paid shipping kit for you to mail it in for free and
                    get paid.
                  </p>
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                    How to Trade In Your Mobile Phone
                  </div>
                  <p style={{ fontSize: "15px", color: "gray" }}>
                    After you send in your cell phone, your buyer will inspect
                    your device and, as long as your device matches your
                    description, the buyer will issue you payment via check or
                    PayPal for your mobile phone. We provide the best cell phone
                    buyback program on the web!
                  </p>
                  <br />
                  <p style={{ fontSize: "15px", color: "gray" }}>
                    Trending Search Terms: <a href="#">sell iphone</a>,
                    <a href="#">sell ipad</a>{" "}
                  </p>
                </div>
              ) : null}
              {/* {categoryData.map((value, index) => {
                return (
                  <>h</>
                  // <div>
                  //   {value.id == id ? <div>{value.description}</div> : null}
                  // </div>
                );
              })} */}
            </div>
            {/* {cat == "ipad" ? (
              <div className="productdata">
                <b>Our Apple iPad Trade in & Buyback Program</b>
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
            ) : null} */}
          </div>
          <div style={{ width: "50%" }}>
            <center>
              <div>
                <div style={{ color: "#506383", fontSize: "24px" }}>
                  “My favorite of the selling sites.”
                </div>
                <div
                  style={{
                    color: "#506383",
                    fontSize: "12px",
                    textAlign: "left",
                    marginLeft: "25px",
                    marginTop: "5px",
                  }}
                >
                  -Jean Chatzky, NBC Today Show
                  <img
                    src={s1}
                    style={{ width: "40px", height: "40px", marginTop: "0px" }}
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <img
                    src={s2}
                    style={{ width: "60px", height: "40px", marginTop: "0px" }}
                  />
                  <img
                    src={s3}
                    style={{ width: "60px", height: "40px", marginTop: "0px" }}
                  />
                  <img
                    src={s4}
                    style={{ width: "60px", height: "40px", marginTop: "0px" }}
                  />
                  <img
                    src={s5}
                    style={{ width: "60px", height: "40px", marginTop: "0px" }}
                  />
                </div>
              </div>
              {/* <img
                src={varientInfo}
                // alt="Girl in a jacket"
                style={{ width: "100%", height: "200px", marginTop: "0px" }} */}
              {/* /> */}
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Varient;
