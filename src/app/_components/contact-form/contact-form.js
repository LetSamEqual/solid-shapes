"use client";

import { useState } from "react";
import styles from "./contact-form.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/handle-contact-form", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(res);
      if (!res.ok) {
        throw new Error(`An error has occured, code: ${res.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.contentContainer}>
      <h2>Let’s work together</h2>{" "}
      <form onSubmit={onSubmit} className={styles.formContainer}>
        <label>
          Name<span className={styles.asterisk}>*</span>
        </label>

        <input
          type="text"
          name="username"
          placeholder="e.g. Linus Torvalds"
          required
          onChange={onChange}
        />
        <label>
          Email<span className={styles.asterisk}>*</span>
        </label>

        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="e.g. RStallman@gnumail.com"
          required
          onChange={onChange}
        />
        <label>
          Message<span className={styles.asterisk}>*</span>
        </label>

        <textarea
          type="text"
          rows="10"
          cols="40"
          wrap="hard"
          name="message"
          placeholder="e.g. ~$ Hello world!"
          required
          onChange={onChange}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
