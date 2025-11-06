import React from "react";
import HomeComponent from "./landing_page/home/HomePage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Notfound from "./landing_page/Notfound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/support" element={<SupportPage />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
