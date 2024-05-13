import React from "react";
import s from "./PcService.module.scss";
import { pcServiceData } from "../../store/pcServiceData";

export default function PcService() {
  return (
    <section className={s.pcService}>
      <h2 className={s.title}>Tietokonepalvelu</h2>
      <div className={s.servicesItems}>
        {pcServiceData.map((service) => (
          <div
            className={s.serviceItem}
            style={{ backgroundImage: `url(${service.img})` }}
          >
            <h4 className={s.itemTitle}>{service.title}</h4>
            <div className={s.info}>
              <p className={s.description}>{service.description}</p>
              <p className={s.price}>-{service.price}€</p>
            </div>
          </div>
        ))}
      </div>
      <div className={s.travelCost}>*KILOMETRIKORVAUS 0,65€/km</div>
    </section>
  );
}
