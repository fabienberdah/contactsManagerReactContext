import React, { createContext, useReducer } from "react";
import ContactsReducer from "./ContactsReducer";
const initialState = {
  contacts: [
    {
      id: 0,
      name: "Pookie Berdah",
      phone: "+1 647-866-4888",
      email: "Pookie@Doodoo.com",
    },
    {
      id: 1,
      name: "Adam Senoun",
      phone: "+33 6 60 52 22 23",
      email: "Adam@Doodoo.com",
    },
    {
      id: 2,
      name: "Fucking Context",
      phone: "+1 800 KISSMYASS",
      email: "context@fuck.com",
    },
    {
      id: 3,
      name: "Avner Mamam",
      phone: "+1 800 Fils de Pute",
      email: "avner@di.com",
    },
  ],
};

export const ContactsContext = createContext(initialState);

export const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContactsReducer, initialState);

  function deleteContact(id) {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  }

  return (
    <ContactsContext.Provider
      value={{
        contacts: state.contacts,
        deleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
