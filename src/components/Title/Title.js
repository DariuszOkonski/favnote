import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Title.module.css';

const Title = ({ children }) => {
  return (
    <h2 className={styles.title}>{children}</h2>
  );
}

Title.propType = {
  children: PropTypes.string.isRequired,
}

export default Title;