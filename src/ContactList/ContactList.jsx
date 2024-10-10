import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactsData, onDeleteContact, filteredContacts }) => {
  return (
    <div className={css.contacts_container}>
      <Contact
        filteredContacts={filteredContacts}
        onDeleteContact={onDeleteContact}
        contactsData={contactsData}
      />
    </div>
  );
};

export default ContactList;
