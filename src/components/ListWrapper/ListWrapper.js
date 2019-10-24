import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from '../css/ListWrapper.module.css'


const ListWrapper = ({ items }) => {
  return (
    <ul className={styles.listWrapper__wrapper}>

      {items.map(item =>
        <ListItem
          key={item.name}
          {...item}
        />
      )}

    </ul>
  );
}

export default ListWrapper;