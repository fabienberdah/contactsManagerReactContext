import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";
import ContactsList from "./components/contacts/ContactsList";

const App = () => {
  return (
    <div className="App">
      <section className="Layout">
        <Header />
      </section>
      <section className="MainContent container">
        <ContactsList />
      </section>
    </div>
  );
};

export default App;
