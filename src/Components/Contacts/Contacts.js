import React from "react";
import PropTypes from "prop-types";
import styles from "./Contacts.module.css";

const Contacts = ({ data, deleteFunc }) => {
  return (
    <div className={styles.container}>
      <ul>
        {data.map((element) => (
          <li key={element.id} className={styles.element}>
            {element.name} : {element.number}
            <button
              className={styles.deleteButton}
              type={"button"}
              onClick={() => {
                deleteFunc(element.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  data: PropTypes.array,
  deleteFunc: PropTypes.func,
};

export default Contacts;
