import React from 'react'
import s from "./AboutUs.module.scss"

export default function AboutUs() {
  return (
    <section className={s.aboutus}>
      <div className={s.parallaxContainer}>
        <div className={s.info}>
          <h2 className={s.title}>Meistä</h2>
          <p className={s.description}>
            Tervetuloa yritykseemme, missä ylpeänä tarjoamme laajan valikoiman
            palveluita tehdäksemme elämästäsi paremman ja mukavamman. Perustettu
            vuonna 2020, yrityksemme pyrkii luomaan täydellisen tasapainon
            laadun ja mukavuuden välille. Erikoistumme tilojenne hoitoon ja
            ylläpitoon tarjoten palveluita tilojen siivouksesta ja
            korjaamisesta. Ammattilaisjoukkomme on valmis muuttamaan minkä
            tahansa tilan täydellisesti hoidetuksi paikaksi, jossa tunnette
            olonne mukavaksi ja viihtyisäksi. Lisäksi huolehdimme teknisestä
            hyvinvoinnistasi. Tarjoamme tietokoneiden ylläpitopalveluita, taaten
            niiden moitteettoman toiminnan ja luotettavuuden. Ja lopuksi,
            autamme tallentamaan arvokkaimmat hetkesi valokuviin. Ammattimaiset
            valokuvaajamme ikuistavat tunteesi ja tärkeät tapahtumat, luoden
            upeita ja ainutlaatuisia kuvia, joita katsot mielelläsi uudelleen ja
            uudelleen. Anna meidän toteuttaa toiveesi ja halusi, ota meihin
            yhteyttä ja saat korkealaatuista palvelua ja luotettavia ratkaisuja
            mukavuuteesi ja tyytyväisyyteesi.
          </p>
        </div>
      </div>
    </section>
  );
}
