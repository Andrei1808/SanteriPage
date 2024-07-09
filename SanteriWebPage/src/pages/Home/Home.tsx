import s from "./Home.module.scss";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Services from "../../components/Services/Services";
import AboutUs from "../../components/AboutUs/AboutUs";
import Feedback from "./Feedback/Feedback";


export default function Home() {
  return (
    <section className={s.home}>
      <div className={s.wrapper}>
        <div className={s.info}>
          <h2 className={s.title}>
            Onko jotain mennyt rikki?
            <br /> Vai tarvitsetko apua?
            <br /> <span className={s.mainText}></span>
          </h2>
          <p className={s.phoneNumber}>+358 (50) 554-52-05</p>
          <Button type="button" className={s.phoneNumberBtn}>
            <NavLink to="tel:+358 (50) 554-52-05">Soita meille nyt!</NavLink>
          </Button>
        </div>
      </div>
      <Services />
      <AboutUs />
      <Feedback />
    </section>
  );
}
