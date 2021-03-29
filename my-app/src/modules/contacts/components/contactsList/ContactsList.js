import React from "react";
import ContactsListItem from "../contactsListItem/ContactsListItem";
import "./ContactsList.css";

export default function ContactsList({ list, onDelete, themes, onEdit }) {
  const headerItem = ["id", "name", "surname", "phone"];

  return (
    <table style={themes}>
      <thead>
        <tr>
          {headerItem.map((el) => (
            <th key={el}>{el}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {list.length &&
          list.map((item) => (
            <ContactsListItem
              key={item.id}
              item={item}
              headerItem={headerItem}
              onDelete={onDelete}
              onEdit = {onEdit}
            />
          ))}
      </tbody>
    </table>
  );
}
