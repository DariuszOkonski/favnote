import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Button.module.css';

const Button = ({ children, href, secondary, ...props }) => {
  const buttonClass = secondary ? styles.secondary : styles.button;

  return (
    <>
      {
        href ?
          (
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className={buttonClass}
            >{children}</a>
          ) : (
            <button
              {...props}
              className={buttonClass}
              type="submit"
            >{children}</button>
          )
      }
    </>
  )
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  secondary: PropTypes.bool,
}

Button.defaultProps = {
  secondary: false
}

export default Button;