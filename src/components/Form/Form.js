import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Form.module.css';
import Input from '../Input/Input';

const Form = ({ submitFn }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Add new twitter account</h2>


      <form
        className={styles.form__form}
        onSubmit={(e) => submitFn(e)}
      >

        <Input
          name="name"
          label="Name"
          maxLength={30}
        />

        <Input
          name="link"
          label="Link"
        />

        <Input
          name="image"
          label="Image"
        />

        <Input
          tag="textarea"
          name="description"
          label="Description"
        />

        <button className={styles.form__button} type="submit">add new item</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  submitFn: PropTypes.func.isRequired,
}

export default Form;