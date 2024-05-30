import ServicesCard from "./ServicesCard/ServicesCard";
import s from "./Services.module.scss";


export default function Services() {
  return (
    <section className={s.services}>
      <div className={s.title}>Mitä me teemme?</div>

      <ServicesCard />
    </section>
  );
}
