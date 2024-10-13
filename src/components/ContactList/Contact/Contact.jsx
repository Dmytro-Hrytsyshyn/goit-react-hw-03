import css from "./Contact.module.css";

import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Contact({ onDeleteContact, filteredContacts }) {
  return (
    <div className={css.container_contact}>
      <div className={css.contact_card} key={filteredContacts.id}>
        <ul className={css.info_contact_card}>
          <li className={css.info_contact}>
            <span>
              <FaUser />
            </span>

            {filteredContacts.name}
          </li>
          <li className={css.info_contact}>
            <span>
              <FaPhoneAlt />
            </span>

            {filteredContacts.number}
          </li>
        </ul>
        <button
          type="button"
          onClick={() => onDeleteContact(filteredContacts.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
