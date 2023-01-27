import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import {
  PhonebookContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
} from './Phonebook.styled.jsx';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid() });
    this.reset();
  };
  reset = () => {
    return this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <PhonebookContainer>
        <Title>Phonebook</Title>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Telephone
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            ></Input>
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </PhonebookContainer>
    );
  }
}

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Phonebook;
