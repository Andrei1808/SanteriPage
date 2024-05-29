import React, { useState } from "react";
import s from "./CctvCards.module.scss";
import { xeomaCardsData } from "../../../store/xeomaData";
import { motion } from "framer-motion";

export default function CctvCards() {
  const [elemIndex, setElemIndex] = useState<number | null>(null);

  const listVariants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: .3,
        delay: i * 0.5,
      },
    }),
    hidden: { opacity: 0, y: -30 },
  };

  return (
    <>
      {xeomaCardsData.map((card, index) => (
        <div
          key={index}
          className={s.cctvCards}
          onMouseEnter={() => {
            setElemIndex(index);
          }}
          onMouseLeave={() => setElemIndex(null)}
          style={{
            backgroundColor: card.bg,
          }}
        >
          {elemIndex !== index ? (
            <>
              <h4 className={s.title}>{card.title}</h4>
              <p className={s.description}>{card.description}</p>
            </>
          ) : (
            <ul className={s.services}>
              {card.services.map((service, i) => {
                return (
                  <motion.li
                    key={service}
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    className={s.serviceItem}
                  >
                    {service}
                  </motion.li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </>
  );
}
