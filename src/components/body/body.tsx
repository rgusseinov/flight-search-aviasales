import React, { useEffect } from 'react';
import { useState } from 'react';
import { getTickets, initiateAPIKey } from '../../api/api';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const Body: React.FC = () => {

  const [ticketList, setTickets] = useState<any>(null);
  
  useEffect(() => {
    // Init Api key
    const generateAPIKey = async() => {
      try {
        await initiateAPIKey();
      } catch (error){
        console.error(error);
      }
    };
    const getTicketList = async() => {
      try {
        const data = await getTickets();
        const limitedTickets = data.tickets.splice(0, 2);
        setTickets(limitedTickets);
      } catch (error){
        console.error(error);
      }
    };
    generateAPIKey();
    getTicketList();
  });

 return (
  <div className={classes.main}>
    <SideBar />
    <Container tickets={ticketList}/>
  </div>
 );  
};

export default Body;
