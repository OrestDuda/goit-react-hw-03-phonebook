import React from "react";
import PropTypes from "prop-types";
import styles from "./FindContact.module.css";
import { v4 as uuid } from "uuid";

const FindContact = ({ filterFunc }) => {
  const id = uuid();
  return (
    <form className={styles.form}>
      <label htmlFor={id}>Find contacts by name</label>
      <input id={id} type={"text"} name={"search"} onChange={filterFunc} />
    </form>
  );
};
FindContact.propTypes = {
  filterFunc: PropTypes.func,
};
export default FindContact;
