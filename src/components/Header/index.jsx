import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cssModule from './Header.module.scss';
import { AuthContext } from '../../context';
import BaseButton from '../UI/Button';

const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  function signOut () {
    setIsAuth(false)
    localStorage.removeItem('is_auth')
  }

  return (
    <div className={cssModule['header']}>
      <div className={cssModule['header__inner']}>
        <div className={cssModule['header__nav']}>
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
          <div className={cssModule['header__sign-out']}>
            <BaseButton type="button" onClick={signOut}>Sign Out</BaseButton>
          </div>
        }
      </div>
    </div>
  );
};

export default Header;
