import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const INITIAL_VALUES = {
  name: "",
  number: "",
};

const phoneNumberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const addContactShema = Yup.object({
  name: Yup.string()
    .min(2, "The name must be at least 2 characters long")
    .max(20)
    .required("Name is required")
    .matches(/\S/, "A-Z,a-z"),
  number: Yup.string()
    .required("Number is required")
    .matches(/\S/, phoneNumberRegex, "Invalid phone number"),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={addContactShema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} action="">
        <label className={css.lable}>
          <span>Name</span>
          <Field className={css.input} name="name" type="text" />
          <ErrorMessage
            className={css.error_message}
            name="name"
            component="span"
          />
        </label>
        <label className={css.lable}>
          <span>Number</span>
          <Field className={css.input} name="number" type="text" />
          <ErrorMessage
            className={css.error_message}
            name="number"
            component="span"
          />
        </label>
        <button className={css.btn_submit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
