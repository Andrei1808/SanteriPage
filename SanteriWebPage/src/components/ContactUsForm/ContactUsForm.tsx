import React from "react";
import s from "./ContactUsForm.module.scss";
import Button from "../Button/Button";


export default function ContactUsForm() {

  const onSubmit = async (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);

    formData.append("access_key", "3fe365a5-0b11-40d2-bd22-834d1e7c26e5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <section className={s.contactUsForm}>
      <form className={s.formBody} onSubmit={()=>onSubmit}>
        <h2 className={s.title}>OTA YHTEYTTÄ</h2>
        <div className={s.formItem}>
          <input
            className={s.formInput}
            placeholder="nimi"
            type="text"
            name="name"
            minLength={2}
            required
          />
        </div>
        <div className={s.formItem}>
          <input
            className={s.formInput}
            placeholder="sähköposti"
            type="email"
            name="email"
            required
          />
        </div>
        <div className={s.formItem}>
          <input
            className={s.formInput}
            placeholder="puhelin"
            type="text"
            name="phone"
            pattern="[0-9]*"
            required
          />
        </div>
        <div className={s.formItem}>
          <textarea
            className={s.formTextarea}
            placeholder="viesti..."
            name="message"
            minLength={15}
            required
          />
        </div>
        <div className={s.formItem}>
          <Button className={s.formBtn} type="submit">
            Lähetä
          </Button>
        </div>
      </form>
    </section>
  );
}
