import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import clsx from "clsx";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScroll, setShowScroll] = useState(true);
  const lastScrollTop = useRef(0);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;

    currentScrollTop > lastScrollTop.current && currentScrollTop > 115
      ? setShowScroll(false)
      : setShowScroll(true);

    lastScrollTop.current = currentScrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showScroll && (
      <header
        className={clsx({
          [s.header]: true,
          [s.down]: showScroll,
        })}
      >
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
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
              >
                <NavLink className={s.menuLink} to="services">
                  palvelut
                </NavLink>

                {isVisible && (
                  <ul
                    className={s.servicesItems}
                    // onMouseOver={() => setIsVisible(true)}
                    // onMouseLeave={() => setIsVisible(false)}
                    // onClick={() => setIsVisible(false)}
                  >
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
