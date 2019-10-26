import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

const Form = ({ submitFn }) => {
  return (
    <div className={styles.wrapper}>
      <Title>Add new twitter account</Title>

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

        <Button>add new item</Button>
      </form>
    </div>
  );
}

Form.propTypes = {
  submitFn: PropTypes.func,
}

export default Form;