import css from "./Contact.module.css";

import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Contact({ contacts }) {
  return (
    <div className={css.container_contact}>
      {contacts.map((contact) => (
        <div className={css.contact_card} key={contact.id}>
          <ul className={css.info_contact_card}>
            <li className={css.info_contact}>
              <span>
                <FaUser />
              </span>

              {contact.name}
            </li>
            <li className={css.info_contact}>
              <span>
                <FaPhoneAlt />
              </span>

              {contact.number}
            </li>
          </ul>
          <button type="sunmit">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Contact;
