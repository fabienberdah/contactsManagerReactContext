import React from "react";
import { ContactsProvider } from "./context/ContactsContext";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";
import ContactsList from "./components/contacts/ContactsList";

const App = () => {
  return (
    <ContactsProvider>
      <div className="App">
        <section className="Layout">
          <Header />
        </section>
        <section className="MainContent container">
          <ContactsList />
        </section>
      </div>
    </ContactsProvider>
  );
};

export default App;
