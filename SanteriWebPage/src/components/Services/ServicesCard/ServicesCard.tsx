import React from 'react'
import { services } from '../../../store/servicesData';
import s from "./ServicesCard.module.scss"

export default function () {
  return (
    <div className={s.servicesCard}>
      {services.map((service, index) => (
        <div key={index}>
              <img className={s.icon } src={service.icon} alt={service.title} />
          <div  className={s.title }>{service.title}</div>
          <div  className={s.description }>{service.description}</div>
        </div>
      ))}
    </div>
  );
}
