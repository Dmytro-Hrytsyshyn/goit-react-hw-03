import css from "./Contact.module.css";

import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Contact({ onDeleteContact, filteredContacts }) {
  return (
    <div className={css.container_contact}>
      {filteredContacts.map((contactData) => (
        <div className={css.contact_card} key={contactData.id}>
          <ul className={css.info_contact_card}>
            <li className={css.info_contact}>
              <span>
                <FaUser />
              </span>

              {contactData.name}
            </li>
            <li className={css.info_contact}>
              <span>
                <FaPhoneAlt />
              </span>

              {contactData.number}
            </li>
          </ul>
          <button type="button" onClick={() => onDeleteContact(contactData.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Contact;
