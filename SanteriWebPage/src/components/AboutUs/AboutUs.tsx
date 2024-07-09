import s from "./AboutUs.module.scss"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {

    const { ref, inView } = useInView({
      triggerOnce: true, 
      threshold: 0.3, 
    });

  
  return (
    <section className={s.aboutus}>
      <div className={s.parallaxContainer}>
        <div className={s.info}>
          <h2 className={s.title}>Meistä</h2>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -150 }}
            transition={{ duration: 1.5 }}
            className={s.descriptionContainer}
          >
            <p className={s.description}>
              Tervetuloa yritykseemme, missä ylpeänä tarjoamme laajan valikoiman
              palveluita tehdäksemme elämästäsi paremman ja mukavamman.
              Perustettu vuonna 2020, yrityksemme pyrkii luomaan täydellisen
              tasapainon laadun ja mukavuuden välille. Erikoistumme tilojenne
              hoitoon ja ylläpitoon tarjoten palveluita tilojen siivouksesta ja
              korjaamisesta. Ammattilaisjoukkomme on valmis muuttamaan minkä
              tahansa tilan täydellisesti hoidetuksi paikaksi, jossa tunnette
              olonne mukavaksi ja viihtyisäksi. Lisäksi huolehdimme teknisestä
              hyvinvoinnistasi. Tarjoamme tietokoneiden ylläpitopalveluita,
              taaten niiden moitteettoman toiminnan ja luotettavuuden. Ja
              lopuksi, autamme tallentamaan arvokkaimmat hetkesi valokuviin.
              Ammattimaiset valokuvaajamme ikuistavat tunteesi ja tärkeät
              tapahtumat, luoden upeita ja ainutlaatuisia kuvia, joita katsot
              mielelläsi uudelleen ja uudelleen. Anna meidän toteuttaa toiveesi
              ja halusi, ota meihin yhteyttä ja saat korkealaatuista palvelua ja
              luotettavia ratkaisuja mukavuuteesi ja tyytyväisyyteesi.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
