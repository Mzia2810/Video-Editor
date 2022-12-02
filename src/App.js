import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import { images } from "../src/constants";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./components/template/Template";
import Editor from "./components/editor/Editor";

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Template" element={<Template />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>

    {/* scroller */}
    {/* <div className="scroler col-md mx-auto">
      <a href="#menu" class="scroll-down" address="true"></a>
    </div> */}

    {/* <SpecialMenu />
    <AboutUs />
    <Chef />
    <Gallery />
    <Footer /> */}
  </div>
);

export default App;
