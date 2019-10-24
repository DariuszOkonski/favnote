import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Form.module.css';

const Form = ({ submitFn }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Add new twitter account</h2>

      <form
        className={styles.form__form}
        onSubmit={(e) => submitFn(e)}
      >

        <div className={styles.form__item}>
          <input type="text" name="name" id="name" maxLength="30" />
          <label htmlFor="name">Name</label>
          <div className={styles.forms__item__bar}></div>
        </div>

        <div className={styles.form__item}>
          <input type="text" name="link" id="link" />
          <label htmlFor="link">Link</label>
          <div className={styles.forms__item__bar}></div>
        </div>

        <div className={styles.form__item}>
          <input type="text" name="image" id="image" />
          <label htmlFor="image">Image</label>
          <div className={styles.forms__item__bar}></div>
        </div>

        <div className={styles.form__item}>
          <textarea name="description" id="description" ></textarea>
          <label htmlFor="description">Description</label>
          <div className={styles.forms__item__bar}></div>
        </div>

        <button className={styles.form__button} type="submit">add new item</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  submitFn: PropTypes.func.isRequired,
}

export default Form;