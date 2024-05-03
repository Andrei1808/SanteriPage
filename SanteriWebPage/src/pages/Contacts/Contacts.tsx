import React from "react";
import s from "./Contacts.module.scss";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineWhereToVote } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Contacts() {
  return (
    <section className={s.contacts}>
      <div className={s.container}>
        <div className={s.contactsItems}>
          <div className={s.title}>yhteystiedot</div>
          <div className={s.contactsItem}>
            <NavLink className={s.contactsItem} to="tel:+358 (50) 554-52-05">
              <span className={s.icon}>
                <FiPhone />
              </span>
              +358 (50) 554-52-05
            </NavLink>
          </div>
          <div className={s.contactsItem}>
            <NavLink
              className={s.contactsItem}
              to="mailto: asiakastuki@kotimaster.fi"
            >
              <span className={s.icon}>
                <TfiEmail />
              </span>
              asiakastuki@kotimaster.fi
            </NavLink>
          </div>
          <div className={s.contactsItem}>
            <NavLink
              className={s.contactsItem}
              to="https://www.google.com/maps?q=Loppi"
              target="blank"
            >
              <span className={s.icon}>
                <MdOutlineWhereToVote />
              </span>
              Palvelemme kaupungeissa Loppi, Riihimäki, Hämeenlinna, Hyvinkää,
              Hausjärvi ja sopimuksen mukaan myös Helsingissä, Forssassa ja
              Lahdessa.
            </NavLink>
          </div>
        </div>
        <div className={s.form}>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}
