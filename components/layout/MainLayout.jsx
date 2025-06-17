import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
