import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ onDeleteContact, filteredContacts }) => {
  return (
    <div className={css.contact_container}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          filteredContacts={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
