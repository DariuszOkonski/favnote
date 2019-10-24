import React from 'react';
import PropTypes from 'prop-types';
// import './ListItem.css';
import styles from '../css/ListItem.module.css';

const ListItem = ({ image, name, description, twitterLink }) => {
  return (
    <li className={styles.listItem__wrapper}>
      <img
        src={image}
        alt={name}
        className={styles.listItem__image}
      />
      <div>
        <h2 className={styles.listItem__name}>{name || 'Dariusz'}</h2>
        <p className={styles.listItem__description}>
          {description}
        </p>
        <a
          href={twitterLink}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.listItem__button}
        >visit twitter page</a>
      </div>
    </li>
  );
}

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
  description: 'One of the React Creators',
}

export default ListItem;