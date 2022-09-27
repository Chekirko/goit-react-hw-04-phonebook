import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, FormLabel, FormInput, SubmitBtn } from './ContactForm.styled';

export const ContactForm = function ({ contacts, changeState }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'inputName':
        setName(value);
        break;

      case 'inputNumber':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : changeState(name, number);
    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <Form action="" onSubmit={handleSubmit}>
      <FormLabel htmlFor="inputId">Name</FormLabel>
      <FormInput
        type="text"
        name="inputName"
        value={name}
        onChange={handleChange}
        id={nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <FormLabel htmlFor="inputId">Number</FormLabel>
      <FormInput
        type="tel"
        name="inputNumber"
        id={numberInputId}
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  changeState: PropTypes.func.isRequired,
};
