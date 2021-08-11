import React from 'react';
import Container from '../container/container';
import Filters from '../filters/filters';
import classes from './body.module.css';

const Main: React.FC = () => {

  return (
    <div className={classes.main}>
      <Filters />
      <Container />
    </div>
 );  
};

export default Main;
