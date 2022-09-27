import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, PageTitle, ContactsTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    this.setState(prevState => {
      const newName = {
        id: nanoid(),
        name: name,
        number: number,
      };
      return {
        contacts: [newName, ...prevState.contacts],
      };
    });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (contacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('E!');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <PageTitle>Phonebook</PageTitle>
        <ContactForm
          contacts={contacts}
          changeState={this.handleAddContact}
        ></ContactForm>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter filter={filter} onChange={this.handleFilter}></Filter>

        <ContactList
          contacts={visibleContacts}
          onBtnDelete={this.handleDeleteContact}
        ></ContactList>
      </Container>
    );
  }
}
