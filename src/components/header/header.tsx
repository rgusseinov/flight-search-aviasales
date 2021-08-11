import React from 'react';
import classes from './header.module.css';

const Header: React.FC = () => (
  <div className={classes.mainHeader}>
    <span className={classes.headerLogo}></span>
  </div>
);

export default Header;
