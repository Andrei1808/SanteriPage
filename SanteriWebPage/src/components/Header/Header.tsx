import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScroll, setShowScroll] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    currentScrollTop > lastScrollTop
      ? setShowScroll(false)
      : setShowScroll(true);

    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showScroll && (
      <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <NavLink to="home">
              <img src={logo} alt="logo-header" />
            </NavLink>
          </div>

          <div className={s.navigation}>
            <ul className={s.menu}>
              <li className={s.navItem}>
                <NavLink className={s.menuLink} to="home">
                  etusivu
                </NavLink>
              </li>
              <li
                className={s.navItem}
                onMouseOver={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
              >
                <NavLink className={s.menuLink} to="services">
                  palvelut
                </NavLink>

                {isVisible && (
                  <ul className={s.servicesItems}>
                    <li className={s.servicesItem}>
                      <NavLink to="computer-service">tietokone</NavLink>
                    </li>
                    <li className={s.servicesItem}>
                      <NavLink to="renovation-service">remontti</NavLink>
                    </li>
                    <li className={s.servicesItem}>
                      <NavLink to="cleaning-service">siivous</NavLink>
                    </li>
                    <li className={s.servicesItem}>
                      <NavLink to="yard-service">pihä</NavLink>
                    </li>
                    <li className={s.servicesItem}>
                      <NavLink to="cctv-service">videovalvonta</NavLink>
                    </li>
                    <li className={s.servicesItem}>
                      <NavLink to="photos-service">valokuvaaja</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li className={s.navItem}>
                <NavLink className={s.menuLink} to="contacts">
                  yhteystiedot
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  );
}
