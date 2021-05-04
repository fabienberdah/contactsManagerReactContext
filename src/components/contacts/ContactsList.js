import React, { useContext } from "react";
import { ContactsContext } from "../../context/ContactsContext";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const { contacts } = useContext(ContactsContext);

  const renderContacts = contacts.map((contact) => {
    return <ContactItem key={contact.id} contact={contact} />;
  });

  return <div className="ContactsList">{renderContacts}</div>;
};

export default ContactsList;
