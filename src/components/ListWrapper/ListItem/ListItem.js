import React from 'react';
import PropTypes from 'prop-types';
// import './ListItem.css';
import styles from '../css/ListItem.module.css';

const ListItem = ({ image, name, description, twitterLink }) => {
  const ImageTag = image ? 'img' : 'div';

  return (
    <li className={styles.listItem__wrapper}>
      <ImageTag
        src={image}
        alt={name}
        className={image ? styles.listItem__image : styles.listItem__imageNone}
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
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
  image: null,
  description: 'One of the React Creators',
}

export default ListItem;