import React, { useEffect } from 'react';
import { useState } from 'react';
import { getTickets, initiateAPIKey } from '../../api/api';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const Body: React.FC = () => {

  const [ticketList, setTickets] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [stopType, setStopType] = useState<number>(0);
  
  const onStopChange = (stop: number) => {
    // console.log(`stop`, stop);
    setStopType(stop);
  };
      
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
        const limitedTickets = data.tickets;
        
        if (!data.stop) {
          setLoading(true);
          getTicketList();
        } else {
          setLoading(false);
          const filteredTickets = limitedTickets.filter((ticket: any) => {
            if (stopType > 0) {
              if (ticket.segments[0].stops.length == stopType) return ticket;
            } else {
              return ticket;
            }
          });
          setTickets(filteredTickets.slice(0, 5));
          console.log(`tickets`, filteredTickets);
        }

      } catch (error){
        console.error(`ERR: `, error);
      }
    };
    generateAPIKey();
    getTicketList();
  });


 return (
  <div className={classes.main}>
    <SideBar onStopChange={onStopChange} />
    <Container 
      tickets={ticketList}
      loading={loading}
    />
  </div>
 );  
};

export default Body;
