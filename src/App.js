import React from "react";
import WhatsAppBarcodeGenerator from "./components/WhatsAppBarcodeGenerator";
import Displayqr from "./components/Displayqr";
import Navigation from "./components/Navigation";
import Linkqr from "./components/Linkqr";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Instagramqr from "./components/Instagramqr";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Text from "./components/Text";
import Sms from "./components/Sms";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app_container">
        <div className="navbar_container">
          <Navigation />
        </div>
        <div className="main_component">
          <Routes>
            <Route path="/" element={<Linkqr />} />
            <Route path="/whatsapp" element={<WhatsAppBarcodeGenerator />} />
            <Route path="/instagram" element={<Instagramqr />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location/>}/>
            <Route path="/text" element={<Text/>}/>
            <Route path='/sms' element={<Sms/>}/>
          </Routes>
        </div>
        <div className="display_content">
          <Displayqr />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
