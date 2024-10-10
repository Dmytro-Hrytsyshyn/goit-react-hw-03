import { useState, useEffect } from "react";
import css from "./App.module.css";
import { nanoid } from "nanoid";

import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem("contacts");
  return savedContacts
    ? JSON.parse(savedContacts)
    : [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
};

function App() {
  const [contacts, setContacts] = useState(getInitialContacts);

  const [filter, setFilter] = useState(() => {
    return localStorage.getItem("filter") || "";
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
  );

  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };

    setContacts([...contacts, finalContact]);

    // console.log("finalContact: ", finalContact);
  };

  const onDeleteContact = (contactID) => {
    const updateContacts = contacts.filter(
      (contact) => contact.id !== contactID
    );
    setContacts(updateContacts);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h1 className={css.title_phonebook}>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox filter={filter} setFilter={setFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={onDeleteContact}
          contactsData={contacts}
        />
      </div>
    </div>
  );
}
export default App;
