import React from "react";
import s from "./ServicesPage.module.scss";
import ServicesPageCards from "./ServicesPageCards/ServicesPageCards";

export default function ServicesPage() {
    return (
      <section className={s.servicesPage}>
        <h2 className={s.title}>meidän palvelut</h2>
        <h4 className={s.subtitle}>
          Palvelumme kattavat laajan valikoiman: pienkorjauksista, sivous, tietokoneiden
          huoltoon ja valvontakamerajärjestelmien asennukseen.
        </h4>
        <ServicesPageCards/>
      </section>
    );
}
