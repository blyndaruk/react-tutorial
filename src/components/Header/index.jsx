import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context';

import BaseButton from '../UI/Button';
import Burger from '../Burger';

import styles from './Header.module.scss';


const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  function signOut () {
    setIsAuth(false)
    localStorage.removeItem('is_auth')
  }

  return (
    <div className={styles['header']}>
      <div className={styles['header__inner']}>
        <div className={styles['header__nav']}>
          {isAuth
            ? <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/posts">Posts</Link>
            </>
            : <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/login">Login</Link>
            </>
          }
        </div>
        {isAuth &&
          <div className={styles['header__sign-out']}>
            <BaseButton type="button" onClick={signOut}>Sign Out</BaseButton>
          </div>
        }
        <div className={styles['header__burger']}>
          <Burger />
        </div>
      </div>
    </div>
  );
};

export default Header;
