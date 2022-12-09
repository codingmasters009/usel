import React from "react";
// import Navbar from "../components/navbar/Index";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import HomeComponent from "./component/Home";
import NaveBar from "./component/NaveBar";
import Footer from "./component/footer/Inder";
import SubCategories from "./component/SubCategories";
import ProductVarient from "./component/ProductVarient";
import CompanyComponent from "./component/CompanyComponent";
import PressMediaComponent from "./component/PressMediaComponent";
import Review from "./component/Review";
import Track from "./component/Track";
import Contectus from "./component/Contectus";
import MeetOurBuyer from "./component/MeetOurBuyer";
import BecomeABuyer from "./component/BecomeABuyer";
import Varientipad from "./component/Varientipad";
import Varientmackbook from "./component/Varientmackbook";
import Varientacomputer from "./component/Varientacomputer";
import Varientwatch from "./component/Varientwatch";
import Varientipod from "./component/Varientipod";
import Varientgameconsole from "./component/Varientgameconsole";
import GameSamsungVarient from "./component/GameSamsungVarient";
import GameNintendoVarient from "./component/GameNintendoVarient";
import GameSonyVarient from "./component/GameSonyVarient";
import VarientComputer from "./component/VarientComputer";
import CumputerLaptop from "./component/CumputerLaptop";
import ComputerLaptopVarient from "./component/ComputerLaptopVarient";
import ComputerDesktop from "./component/ComputerDesktop";
import ComputerDesktopVarient from "./component/ComputerDesktopVarient";
import TechType from "./component/TechType";
import AppleAssosries from "./component/AppleAssosries";
import ApplePancilVarient from "./component/ApplePancilVarient";
import AppleKeyboardVarient from "./component/AppleKeyboardVarient";
import AppleDisplayVarient from "./component/AppleDisplayVarient";
import AppleTvType from "./component/AppleTvType";
import CalculatorVarient from "./component/CalculatorVarient";
import CameraLenseVareint from "./component/CameraLenseVareint";
import ComputerPartsType from "./component/ComputerPartsType";
import GraphicCardVarient from "./component/GraphicCardVarient";
import HardDriveVarient from "./component/HardDriveVarient";
import ComputerPeraphil from "./component/ComputerPeraphil";
import ComputerParaphielSubCategory from "./component/ComputerParaphielSubCategory";
import DroneCompany from "./component/DroneCompany";
import DroneShowProduct from "./component/DroneShowProduct";
import GPSCompany from "./component/GPSCompany";
import GPSshowProduct from "./component/GPSshowProduct";
import HEadPhoneCompany from "./component/HEadPhoneCompany";
import HeadPhoneShowProduct from "./component/HeadPhoneShowProduct";
import IpadCashOffer from "./component/IpadCashOffer";
import IpadConditionSelection from "./component/IpadConditionSelection";
import IpodClasicSection from "./component/IpodClasicSection";
import IpodOfferSection from "./component/IpodOfferSection";
import IpodNanoSection from "./component/IpodNanoSection";
/////////////////////////////
import Varient from "./component/Varient";
import Company from "./component/Company";
import Offer from "./component/Offer";
import PriceOffer from "./component/PriceOffer";
import PaymentMethod from "./component/PaymentMethod";
import ContactusEmail from "./component/ContactusEmail";
///////////////////////////////
import "./component/general.css";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NaveBar />
        </div>
        <Routes>
          <Route exact path="/email" element={<ContactusEmail />} />
          <Route exact path="/Varient/:cat/:id" element={<Varient />} />
          <Route exact path="/Company/:cat/:id" element={<Company />} />
          <Route exact path="/Offer/:cat/:id" element={<Offer />} />
          <Route exact path="/PriceOffer/:id" element={<PriceOffer />} />
          <Route exact path="/PaymentMethod/:id" element={<PaymentMethod />} />

          <Route exact path="" element={<HomeComponent />} />
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/subcategories" element={<SubCategories />} />
          <Route exact path="/company" element={<CompanyComponent />} />
          <Route exact path="/press" element={<PressMediaComponent />} />
          <Route exact path="/review" element={<Review />} />
          <Route exact path="/track" element={<Track />} />
          <Route exact path="/contectus" element={<Contectus />} />
          <Route exact path="/meetourbuyer" element={<MeetOurBuyer />} />
          <Route exact path="/becomeabuyer" element={<BecomeABuyer />} />
          <Route
            exact
            path="/productvarient/:cat"
            element={<ProductVarient />}
          />
          <Route
            exact
            path="*"
            element={
              <div>
                <center>
                  <h1>404</h1>
                </center>
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
