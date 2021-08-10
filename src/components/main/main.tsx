import React from 'react';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const Main: React.FC = () => {

  return (
    <div className={classes.main}>
      <SideBar />
      <Container />
    </div>
 );  
};

export default Main;
