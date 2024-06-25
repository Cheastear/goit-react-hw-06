import { useState } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import ContactFile from "./Contacts.json";

import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contact");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return ContactFile;
  });
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    setContacts((prevContacts) => {
      const newContacts = [
        ...prevContacts,
        {
          id: nanoid(),
          name: name,
          number: number,
        },
      ];

      window.localStorage.setItem("saved-contact", JSON.stringify(newContacts));

      return newContacts;
    });
  };
  const deleteContact = (taskId) => {
    setContacts((prevTasks) => {
      const newContacts = prevTasks.filter((task) => task.id !== taskId);
      window.localStorage.setItem("saved-contact", JSON.stringify(newContacts));
      return newContacts;
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contactArr={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
