import React from "react";
import s from "./Footer.module.scss";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.info}>
          <div className={s.phone}>
            <h3 className={s.title}>Puhelin</h3>
            <p className={s.description}>+358 (50) 554-52-05</p>
          </div>
          <div className={s.email}>
            <h3 className={s.title}>Sähköposti</h3>
            <p className={s.description}>asiakastuki@kotimaster.fi</p>
          </div>
          <div className={s.area}>
            <h3 className={s.title}>Työaluet</h3>
            <ul className={s.areasList}>
              <li className={s.areasItem}>Loppi</li>
              <li className={s.areasItem}>Riihimäki</li>
              <li className={s.areasItem}>Hämeenlinna</li>
              <li className={s.areasItem}>Hyvinkää</li>
              <li className={s.areasItem}>Hausjärvi</li>
            </ul>
          </div>
        </div>
        <div className={s.logo}>
          <NavLink to="home">
            <img src={logo} alt="logo-footer" />
          </NavLink>
        </div>
        <div className={s.copyright}>
          <p>
            Santerin Huolto Tmi | Y-tunnus: 3179225-8 | Copyright © {year}{" "}
            Santerin Palvelut
          </p>
        </div>
      </div>
    </footer>
  );
}
