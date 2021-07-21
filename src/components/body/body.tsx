import React from 'react';
import api from '../../api/api';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const Body: React.FC = () => {
 console.log(`api`, api);
 return (
  <div className={classes.main}>
    <SideBar />
    <Container />
  </div>
 );  
};

export default Body;
