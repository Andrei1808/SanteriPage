import React, { useEffect, useState } from "react";
import s from "./Cctv.module.scss";
import { xeomaData } from "../../store/xeomaData";
import CctvCards from "./CctvCards/CctvCards";

export default function Cctv() {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className={s.cctv}>
      <h2 className={s.title}>
        XEOMA Videovalvonta AI-videoanalytiikan avulla
      </h2>

      {windowWidth > 576 && (
        <video
          className={s.videoPlayer}
          autoPlay
          id="my-player"
          preload="auto"
          muted
          playsInline
          controls={false}
          data-autoplay-desktop={true}
          data-autoplay-portrait={true}
          data-autoplay-mobile={true}
          data-play-on-hover={false}
          src="../../src/assets/video/xeoma.mp4"
          loop
        ></video>
      )}

      {xeomaData.map((item, i) => {
        return (
          <div key={i} className={s.infoItem}>
            <h3 className={s.infoTitle}>{item.title}</h3>
            <p className={s.info}>{item.description}</p>
          </div>
        );
      })}
      <div className={s.cardsContainer}>
        <CctvCards />
      </div>
    </section>
  );
}
