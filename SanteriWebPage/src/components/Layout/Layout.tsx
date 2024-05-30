import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import s from "./Layout.module.scss";

export default function Layout() {
  return (
    <div className={s.layout}>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}
