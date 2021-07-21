import React, { useEffect } from 'react';
import { getTickets } from '../../api/api';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const Body: React.FC = () => {

  useEffect(() => {
    const generateAPIKey = async() => {
      try {
        await getTickets();
      } catch (err){
        console.log(err);
      }
    };
    generateAPIKey();
  });

 return (
  <div className={classes.main}>
    <SideBar />
    <Container />
  </div>
 );  
};

export default Body;
