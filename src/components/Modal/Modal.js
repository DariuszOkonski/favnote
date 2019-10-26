import React from 'react';
import styles from '../css/Modal.module.css';
import Form from '../Form/Form'

const Modal = ({ closeModalFn }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}
        onClick={closeModalFn}
      >x</button>

      <Form />
    </div>
  );
}

export default Modal;