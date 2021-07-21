import React from 'react';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const Body = () => {
 return (
  <div className={classes.main}>
    <SideBar />
    <Container />
  </div>
 );  
};

export default Body;
