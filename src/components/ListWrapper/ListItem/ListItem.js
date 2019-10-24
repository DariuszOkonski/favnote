import React from 'react';
import './ListItem.css';
import danAbramovImage from '../../../assets/images/danabramov.jpg';

const ListItem = () => {
  return (
    <li className='listItem__wrapper'>
      <img
        src={danAbramovImage}
        alt=""
        className="listItem__image"
      />
      <div>
        <h2 className="listItem__name">Dan Abramow</h2>
        <p className="listItem__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo labore temporibus quaerat laudantium eius voluptate a error dolor. Sit aliquid cum iure aspernatur. Modi delectus enim dolores quam dignissimos veniam.</p>
        <button className="listItem__button">visit twitter page</button>
      </div>
    </li>
  );
}

export default ListItem;