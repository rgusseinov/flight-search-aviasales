import React, { useEffect } from 'react';
import { useState } from 'react';
import { getTickets, initiateAPIKey } from '../../api/api';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const Body: React.FC = () => {

  const [ticketList, setTickets] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [stopType1, setStopType] = useState<boolean>(false);
  
  const onStopChange1 = (evt: React.FormEvent<HTMLInputElement>, stop: boolean) => {
    // console.log(`stop`, stop);
    setStopType(stop);
    getTickets();
  };
      
  useEffect(() => {

    const generateAPIKey = async() => {
      try {
        await initiateAPIKey();
      } catch (error){
        console.error(error);
      }
    };

    generateAPIKey();
    getTickets();

  });


  const getTickets = async() => {
    const token = localStorage.getItem('SEARCH_KEY');
    const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${token}`);
  
    if (response.ok) {
        const data = await response.json();

        if (!data.stop) {
          setLoading(true);
          await getTickets();
        } else {

          const filteredTickets = data.tickets.filter((ticket: any) => {
            if (stopType1){
              if (ticket.segments[0].stops.length === 1){
                return ticket;
              }
            } else {
              return ticket;
            }
          });

          setTickets(filteredTickets);
          setLoading(false);
          // return tickets;
        }
    } else if (response.status == 404) {
      // await getTickets();
    } else {
      
      setLoading(true);
      await getTickets();
    }
  };

 return (
  <div className={classes.main}>
    <SideBar
      stopType1={stopType1}
      onStopChange1={onStopChange1}
    />
    <Container 
      tickets={ticketList}
      loading={loading}
    />
  </div>
 );  
};

export default Body;
