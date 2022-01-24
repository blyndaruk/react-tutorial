import React from 'react';
import { setMenuStatus } from '../../store/actions';
import store from '../../store';
import styles from './Burger.module.scss';

const Burger = () => {
  function toggleBurger () {
    store.dispatch(setMenuStatus())
  }

  return (
    <div className={styles['burger']} onClick={toggleBurger}>
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="20" />
        <rect y="30" width="100" height="20" />
        <rect y="60" width="100" height="20" />
      </svg>
    </div>
  );
};

export default Burger;
