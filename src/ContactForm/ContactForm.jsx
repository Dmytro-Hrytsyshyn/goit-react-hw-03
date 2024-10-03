import css from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={css.form} action="">
      <label className={css.lable}>
        <span>Name</span>
        <input className={css.input} type="text" required />
      </label>
      <label className={css.lable}>
        <span>Number</span>
        <input className={css.input} type="text" required />
      </label>
      <button className={css.btn_submit} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
