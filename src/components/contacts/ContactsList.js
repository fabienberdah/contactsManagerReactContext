import React, { useState } from "react";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const [contacts, setContacts] = useState([
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
  ]);

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const renderContacts = contacts.map((contact) => {
    return (
      <ContactItem
        key={contact.id}
        contact={contact}
        const
        contactDeleteHandler={() => deleteContact(contact.id)}
      />
    );
  });

  return <div className="ContactsList">{renderContacts}</div>;
};

export default ContactsList;
