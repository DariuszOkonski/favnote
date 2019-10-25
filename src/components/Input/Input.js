import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Input.module.css';

const Input = ({ tag: Tag, name, label, maxLength }) => {
  return (
    <div className={styles.input}>
      <Tag
        required
        type="text"
        name={name}
        id={name}
        maxLength={maxLength}
      />
      <label htmlFor={name}>{label}</label>
      <div className={styles.bar}></div>
    </div>
  );
}

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
}

Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
}

export default Input;