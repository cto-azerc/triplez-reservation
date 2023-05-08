import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./Layout/Navigation";
import Home from "./Scene/Home";
import Footer from "./Layout/Footer";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default Router;
