import React from "react";
import { services } from "../../../store/servicesData";
import s from "./ServicesCard.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ServicesCard() {
  const listVariants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0, y: -30 },
  };

  return (
    <div className={s.servicesCard}>
      {services.map((service, i) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        return (
          <motion.div
            className={s.card}
            key={i}
            variants={listVariants}
            initial="hidden"
            animate={inView ? "visible" : ""}
            custom={i}
            ref={ref}
          >
            <img className={s.icon} src={service.icon} alt={service.title} />
            <div className={s.title}>{service.title}</div>
            <div className={s.description}>{service.description}</div>
          </motion.div>
        );
      })}
    </div>
  );
}