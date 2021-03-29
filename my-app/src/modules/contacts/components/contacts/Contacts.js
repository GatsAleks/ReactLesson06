import React, { useState, useContext } from "react";
import "./Contacts.css";
import ContactsForm from "../contactsForm/ContactsForm";
import ContactsList from "../contactsList/ContactsList";
import useContacts from "../../../../hooks/useContacts";

import ThemeContext from "../../../../theme-context";

export default function Contacts({ toggleTheme }) {
  const { list, createNewContact, deleteContact, editContact } = useContacts();

  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState({});

  const deleteContacts = (id) => {
    deleteContact(id);
  };

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  const createContact = (newContactItem) => {
    createNewContact(newContactItem);
    onShowForm();
  };

  const onEditUser = (user) => {
    onShowForm();
    setEditUser(user);
  };

  const themes = useContext(ThemeContext);

  return (
    <div style={themes} className="container">
      <div>
        <button onClick={toggleTheme} className="buttonTheme">
          Change theme
        </button>
      </div>
      <h1>Contacts book</h1>
      <ContactsList
        list={list}
        onDelete={deleteContacts}
        onEdit={onEditUser}
        themes={themes}
      />
      <div className="form_container">
        <button onClick={onShowForm}>
          {showForm ? "Hide form" : "Add contacts"}
        </button>
        {showForm ? (
          <ContactsForm
            onShowForm={onShowForm}
            createContact={createContact}
            editUser={editUser}
            editContact={editContact}
            setEditUser={setEditUser}
          />
        ) : null}
      </div>
    </div>
  );
}
