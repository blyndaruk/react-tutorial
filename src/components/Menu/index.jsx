import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import cssModule from './Menu.module.scss';

const Menu = () => {
  const isOpen = useSelector(state => state['ui']['isMenuOpen'])
  const cn = classNames(cssModule['menu'], { [cssModule['is-open']]: isOpen })
  return (
    <div className={cn}>
      Menu
    </div>
  );
};

export default Menu;
