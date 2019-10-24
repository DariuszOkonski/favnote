import React from 'react';
import ListItem from './ListItem/ListItem';


const ListWrapper = ({ items }) => {
  return (
    <ul className="listWrapper__wrapper">

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