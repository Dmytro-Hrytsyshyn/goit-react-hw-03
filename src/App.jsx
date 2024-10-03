// import { useState } from "react";
import css from "./App.module.css";

import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

function App() {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h1 className={css.title_phonebook}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}
export default App;
