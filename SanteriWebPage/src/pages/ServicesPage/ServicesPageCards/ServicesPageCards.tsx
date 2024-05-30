import React from "react";
import s from "./ServicesPageCards.module.scss";
import { services } from "../../../store/servicesData";
import { NavLink } from "react-router-dom";

export default function ServicesPageCards() {
  return (
    <div className={s.container}>
      {services.map((service, index) => (
        <NavLink className={s.link} to={service.route}>
          <div className={s.card} key={index}>
            <div className={s.imgWrapper}>
              <img className={s.img} src={service.img} alt={service.title} />
            </div>
            <div className={s.infoWrapper}>
              <img className={s.icon} src={service.icon} alt={service.title} />
              <p className={s.description}>{service.title}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
