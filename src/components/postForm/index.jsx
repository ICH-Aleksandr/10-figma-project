import styles from "./styles.module.css";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const PostForm = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <section className="styles.section">
      <h1>Написать пост</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="styles.form">
        <div className="styles.formGroup">
          <label htmlFor="title">Заголовок</label>
          <input
            type="text"
            id="title"
            {...register("title", { reguired: true })}
          />
        </div>
        <div className="styles.formGroup">
          <label htmlFor="content">Контент</label>
          <input
            type="text"
            id="title"
            {...register("title", { reguired: true })}
          />
        </div>
        <button type="submit" className="styles.button">
          Отправить
        </button>
      </form>
    </section>
  );
};
export default PostForm;
