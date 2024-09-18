import React from "react";
import Header from "../../../layout/Site/Header/Header";
import Footer from "../../../layout/Site/Footer/Footer";
import { Outlet } from "react-router-dom";

const SiteRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SiteRoot;
