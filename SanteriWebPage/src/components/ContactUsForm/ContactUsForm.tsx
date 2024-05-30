import React, { useState } from "react";
import s from "./ContactUsForm.module.scss";
import Button from "../Button/Button";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const apiKey: string | undefined = import.meta.env.VITE_APP_API_KEY;

    if (apiKey) {
      formData.append("access_key", apiKey);
    } else {
      throw new Error("Invalid api key!");
    }

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
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <section className={s.contactUsForm}>
      <form className={s.formBody} onSubmit={onSubmit}>
        <h2 className={s.title}>OTA YHTEYTTÄ</h2>
        <div className={s.formItem}>
          <input
            className={s.formInput}
            placeholder="nimi"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={s.formItem}>
          <input
            className={s.formInput}
            placeholder="puhelin"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]*"
            required
          />
        </div>
        <div className={s.formItem}>
          <textarea
            className={s.formTextarea}
            placeholder="viesti..."
            name="message"
            value={formData.message}
            onChange={handleChange}
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
