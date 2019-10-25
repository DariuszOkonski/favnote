import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.wrapper}>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            exact to="/">twitters
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/articles">articles
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/notes">notes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;