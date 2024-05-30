import React from "react";
import s from "./Feedback.module.scss";
import { VscFeedback } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Feedback() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section className={s.feedback}>
      <h2 className={s.title}>asiakkaiden arvostelut</h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -150 }}
        transition={{ duration: 1.5 }}
        className={s.feedbackItems}
      >
        <div className={s.feedbackItem}>
          <span className={s.icon}>
            <VscFeedback />
          </span>
          <p className={s.feedbackText}>
            "Yrityksenne tarjosi erinomaista palvelua, kun tarvitsin apua kodin
            siivouksessa ja korjauksissa. Tiimi oli ammattitaitoinen ja
            ystävällinen, ja he tekivät loistavaa työtä muuttaen tilani
            mukavaksi ja viihtyisäksi. Olen erittäin tyytyväinen lopputulokseen
            ja suosittelen teitä kaikille!"
            <span className={s.feedbackAuthor}>Mikka</span>
          </p>
        </div>
        <div className={s.feedbackItem}>
          <span className={s.icon}>
            <VscFeedback />
          </span>
          <p className={s.feedbackText}>
            "Kiitos yrityksellenne moitteettomasta teknisestä tuesta ja
            valokuvauspalveluista! Olen nauttinut ammattitaitoisesta ja
            ystävällisestä asiakaspalvelusta jokaisessa vuorovaikutuksessa
            kanssanne. Valokuvat ovat upeita ja ovat tulleet tärkeäksi osaksi
            muistoistani. Suosittelen yritystänne kaikille, jotka etsivät
            laadukasta ja luotettavaa palvelua."
            <span className={s.feedbackAuthor}>Tuomas</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
