import React, { useState } from "react";
import s from "./Values.module.scss";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { valuesData } from "../../../store/valuesData";
import clsx from "clsx";

export default function Values() {
  const [elemIndex, setElemIndex] = useState<number | null>(null);

  const clickHandler = (index: number) => {
    setElemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={s.values}>
      <h2 className={s.title}>santerin arvot</h2>
      <ul className={s.valuesItems}>
        {valuesData.map((value, index) => (
          <li
            key={index}
            className={s.valuesItem}
            onClick={() => clickHandler(index)}
          >
            <h4 className={s.itemTitle}>
             - {value.title}
              <span>
                {elemIndex === index ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
            </h4>
            {elemIndex === index ? (
              <p
                className={clsx(s.valuesDescription, {
                  [s.openDescription]: elemIndex === index,
                })}
              >
                {value.description}
              </p>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
