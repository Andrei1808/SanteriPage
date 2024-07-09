import s from "./ServicesPage.module.scss";
import ServicesPageCards from "./ServicesPageCards/ServicesPageCards";
import Values from "./Values/Values";

export default function ServicesPage() {
  return (
    <section className={s.servicesPage}>
      <h2 className={s.title}>meidän palvelut</h2>
      <h4 className={s.subtitle}>
        Palvelumme kattavat laajan valikoiman: pienkorjauksista, sivous,
        tietokoneiden huoltoon ja valvontakamerajärjestelmien asennukseen.
      </h4>
      <ServicesPageCards />
      <Values />
      <div className={s.ourWish}>
        <h2 className={s.wishText}>
          me hoidamme kotisi!{" "}
          <span className={s.caption}>santerin palvelut.</span>
        </h2>
      </div>
    </section>
  );
}
