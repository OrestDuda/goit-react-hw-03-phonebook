import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import styles from "./Phonebook.module.css";

class Phonebook extends Component {
  state = {
    name: "",
    number: "",
  };
  contacts = this.props.data;
  nameID = uuid();
  numberID = uuid();

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let contact = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.func(contact);
    event.currentTarget.name.value = "";
    event.currentTarget.number.value = "";
  };

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.label} htmlFor={this.nameID}>
            Name
          </label>
          <input
            id={this.nameID}
            onChange={this.handleChange}
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <label className={styles.label} htmlFor={this.numberID}>
            Number
          </label>
          <input
            id={this.numberID}
            onChange={this.handleChange}
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button className={styles.button} type={"submit"}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
export default Phonebook;
