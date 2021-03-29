import React, { useEffect, useState } from "react";
import "./ContactsForm.css";

export default function ContactsForm({
  onShowForm,
  createContact,
  editUser,
  editContact,
  setEditUser,
}) {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    phone: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      editContact(user);
      setEditUser({});
    } else {
      createContact(user);
    }
    onShowForm();
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    Object.keys(editUser).length && setUser(editUser);
  }, [editUser]);

  return (
    <form onSubmit={onFormSubmit} className="form">
      <p>Add a new contact in your contact book</p>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={onInputChange}
      />
      <input
        type="text"
        name="surname"
        value={user.surname}
        onChange={onInputChange}
      />
      <input
        type="tel"
        name="phone"
        value={user.phone}
        onChange={onInputChange}
      />
      <div className="form_buttons">
        <button type="button" onClick={onFormSubmit}>
          Save
        </button>
        <button onClick={onShowForm} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
}
