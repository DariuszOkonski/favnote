import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Button.module.css';

const Button = ({ children, href }) => (
  <>
    {
      href ?
        (
          <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.button}
          >{children}</a>
        ) : (
          <button className={styles.button} type="submit">{children}</button>
        )
    }
  </>
);


Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
}

export default Button;