import React from "react";
import Header from "../../../layout/Admin/Header/Header";
import Footer from "../../../layout/Admin/Footer/Footer";
import { Outlet } from "react-router-dom";

const AdminRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminRoot;
