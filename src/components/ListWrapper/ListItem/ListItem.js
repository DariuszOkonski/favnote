import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/ListItem.module.css';
import Button from '../../Button/Button';
import Title from '../../Title/Title';

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
        <Title>{name || 'No name'}</Title>

        <p className={styles.listItem__description}>
          {description}
        </p>

        <Button href={twitterLink}>visit twitter page</Button>
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