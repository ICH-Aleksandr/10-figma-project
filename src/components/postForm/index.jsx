import styles from "./styles.module.css";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const PostForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const postData = {
      title: data.title,
      text: data.content,
    };

    axios
      .post("https://699eb2fd78dda56d396b07c2.mockapi.io/posts", postData)
      .then((response) => {
        console.log("Данные отправлены", response);
        reset();
      })
      .catch((error) => {
        console.error("Ошибка отправки", error);
      });
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Написать пост</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Заголовок</label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className={styles.input}
            placeholder="Заголовок"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content">Текст поста</label>
          <textarea
            id="content"
            {...register("content", { required: true })}
            className={styles.textarea}
            placeholder="Введите текст"
          />
        </div>
        <button type="submit" className={styles.button}>
          Публикация
        </button>
      </form>
    </section>
  );
};

export default PostForm;
