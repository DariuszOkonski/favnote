import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/ListItem.module.css';
import Button from '../../Button/Button';
import Title from '../../Title/Title';

const ListItem = ({ image, title, description, link }) => {
  const ImageTag = image ? 'img' : 'div';

  return (
    <li className={styles.listItem__wrapper}>
      {image &&
        <ImageTag
          src={image}
          alt={title}
          className={image ? styles.listItem__image : styles.listItem__imageNone}
        />
      }

      <div>
        <Title>{title || 'No name'}</Title>

        <p className={styles.listItem__description}>
          {description}
        </p>
        {link &&
          <Button href={link}>visit twitter page</Button>
        }
      </div>
    </li>
  );
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
}

ListItem.defaultProps = {
  image: null,
  link: null
}

export default ListItem;