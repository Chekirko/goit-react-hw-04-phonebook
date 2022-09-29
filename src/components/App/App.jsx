import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, PageTitle, ContactsTitle } from './App.styled';

export const App = function () {
  const savedContacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(savedContacts);
  const [contacts, setContacts] = useState(
    parsedContacts ? [...parsedContacts] : []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const newName = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prev => {
      return [newName, ...prev];
    });
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState => {
      return [...prevState.filter(contact => contact.id !== contactId)];
    });
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm contacts={contacts} changeState={handleAddContact} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter filter={filter} onChange={handleFilter} />

      <ContactList
        contacts={visibleContacts}
        onBtnDelete={handleDeleteContact}
      />
    </Container>
  );
};
