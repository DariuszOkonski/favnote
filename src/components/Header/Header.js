import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import logoImage from '../../assets/images/logo.svg';
import Button from '../Button/Button';
import styles from '../css/Header.module.css';

const Header = ({ openModalFn }) => {
  return (
    <header className={styles.wrapper}>
      <img src={logoImage} alt="FavNote logo" />
      <HeaderNavigation />

      <Button
        onClick={openModalFn}
        secondary
      >new item</Button>
    </header>
  );
}

export default Header;