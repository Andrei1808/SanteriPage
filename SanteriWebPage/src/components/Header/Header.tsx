import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScroll, setShowScroll] = useState(true);
  const [isMenu, setIsMenu] = useState(true);
  const lastScrollTop = useRef(0);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    const scrollConditions =
      currentScrollTop > lastScrollTop.current && currentScrollTop > 115;

    if (scrollConditions && innerWidth > 968) {
      setShowScroll(false);
      setIsVisible(false);
    } else {
      setShowScroll(true);
    }

    lastScrollTop.current = currentScrollTop;
  };

  const handleResize = () => {
    if (window.innerWidth > 968) {
      setIsMenu(true);
    } else {
      setIsMenu(false);
    }
  };

  useEffect(() => {
    window.innerWidth > 968 ? setIsMenu(true) : setIsMenu(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
            {isMenu ? (
              <ul className={s.menu}>
                <li
                  className={s.navItem}
                  onClick={() =>
                    window.innerWidth < 968 ? setIsMenu(false) : ""
                  }
                >
                  <NavLink className={s.menuLink} to="home">
                    etusivu
                  </NavLink>
                </li>
                <li
                  className={s.navItem}
                  onClick={() =>
                    window.innerWidth < 968 ? setIsMenu(false) : ""
                  }
                  onMouseEnter={() => {
                    if (innerWidth > 968) {
                      setIsVisible(true);
                    }
                  }}
                  onMouseLeave={() => setIsVisible(false)}
                >
                  <NavLink className={s.menuLink} to="services">
                    palvelut
                  </NavLink>

                  {isVisible && (
                    <motion.ul
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7 }}
                      className={s.servicesItems}
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
                    </motion.ul>
                  )}
                </li>
                <li className={s.navItem}>
                  <NavLink
                    className={s.menuLink}
                    onClick={() =>
                      window.innerWidth < 968 ? setIsMenu(false) : ""
                    }
                    to="contacts"
                  >
                    yhteystiedot
                  </NavLink>
                </li>
              </ul>
            ) : (
              " "
            )}
          </div>
          {innerWidth < 969 && (
            <div
              className={s.burgerMenuContainer}
              onClick={() => {
                setIsMenu(!isMenu);
              }}
            >
              <div
                className={clsx({
                  [s.burgerMenuCross]: isMenu,
                  [s.burgerMenu]: !isMenu,
                })}
              ></div>
            </div>
          )}
        </div>
      </header>
    )
  );
}
