import React from "react";
import ServicesCard from "./ServicesCard/ServicesCard";
import s from "./Services.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section className={s.services}>
      <div className={s.title}>Mitä me teemme?</div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -150 }}
        transition={{ duration: 1.5 }}
      >
        <ServicesCard />
      </motion.div>
    </section>
  );
}
