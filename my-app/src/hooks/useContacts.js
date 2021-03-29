import { useEffect, useState } from "react";
import api from "../api";

export default function useContacts() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get().then(({ data }) => setList(data));
  }, []);

  function createNewContact(newContactItem) {
    api.post("", newContactItem).then(({ data }) => {
      setList((list) => [...list, data]);
    });
  }

  function deleteContact(id) {
    api.delete(id);
    setList(list.filter((item) => item.id !== id));
  }

  function editContact(user) {
    api
      .put(user.id, user)
      .then(({ data }) =>
        setList((list) =>
          list.map((user) => (user.id === data.id ? data : user))
        )
      );
  }

 
  return {
    list,
    createNewContact,
    deleteContact,
    editContact,
  };
}
