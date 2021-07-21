import React from 'react';
import classes from './header.module.css';

const Header = () => {
 return (
  <div className={classes.mainHeader}>
    <span className={classes.header__logo}></span>
  </div>
  );
};

export default Header;