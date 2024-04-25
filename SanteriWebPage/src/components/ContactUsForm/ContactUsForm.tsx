import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import s from "./ContactUsForm.module.scss";
import Button from "../Button/Button";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export default function ContactUsForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <section className={s.contactUsForm}>
      <form className={s.formBody} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={s.title}>OTA YHTEYTTÄ</h2>
        <div className={s.formItem}>
          <input
            className={s.formInput}
            placeholder="nimi"
            type="text"
            {...register("firstName")}
          />
        </div>
        <div className={s.formItem}>
          <input
            className={s.formInput}
            placeholder="sähköposti"
            type="text"
            {...register("email")}
          />
        </div>
        <div className={s.formItem}>
          <input
            className={s.formInput}
            placeholder="puhelin"
            type="text"
            {...register("phoneNumber")}
          />
        </div>
        <div className={s.formItem}>
          <textarea
            className={s.formTextarea}
            placeholder="viesti..."
            {...register("message")}
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
