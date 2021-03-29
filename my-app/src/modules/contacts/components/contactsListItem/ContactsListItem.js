import React from "react";
import "./ContactsListItem.css";

export default function ContactsListItem({
  item,
  onDelete,
  headerItem,
  onEdit,
}) {
  const onDeleteItem = (e) => onDelete(item.id);
  const onEditContact = (e) => onEdit(item);
  return (
    <tr>
      {headerItem.map((el) => (
        <td key={el}>{item[el]}</td>
      ))}
      <td>
        <button onClick={onDeleteItem}>delete</button>
        <button onClick={onEditContact}>edit</button>
      </td>
    </tr>
  );
}
