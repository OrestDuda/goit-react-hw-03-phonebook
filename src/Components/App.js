import React, { Component } from "react";
import Container from "./Container/Container";
import Phonebook from "./Phonebook/Phonebook";
import Section from "./Section/Section";
import Contacts from "./Contacts/Contacts";
import FindContact from "./FindContact/FindContact";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  updateContact = (newContact) => {
    if (
      this.state.contacts.find((contact) => contact.name === newContact.name)
    ) {
      alert(newContact.name + " is already exist in phonebook");
      return;
    }
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = (elementID) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== elementID
      ),
    }));
  };
  componentDidMount() {
    const localContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(localContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <Section title={"Phonebook"}>
          <Phonebook func={this.updateContact} />
        </Section>
        <Section title={"Contacts"}>
          <FindContact filterFunc={this.changeFilter} />
          <Contacts
            data={filteredContacts}
            filterFunc={this.changeFilter}
            deleteFunc={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
