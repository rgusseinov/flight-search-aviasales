import React, { useEffect } from 'react';
import { useState } from 'react';
import { initiateAPIKey } from '../../api/api';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const Body: React.FC = () => {

  const [ticketList, setTickets] = useState<any>([]);
  const [ticketLimit, setTicketLimit] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);

  const [filterTypeCheap, setFilterTypeCheap] = useState<boolean>(false);

  const [stopTypeAll, setStopTypeAll] = useState<boolean>(true);
  const [stopType1, setStopType1] = useState<boolean>(true);
  const [stopType2, setStopType2] = useState<boolean>(true);
  const [stopType3, setStopType3] = useState<boolean>(true);

  // Sort Type

  const onStopChangeAll = (evt: React.FormEvent<HTMLInputElement>, stop: boolean) => {
    if (stop){
      setStopTypeAll(true);
      setStopType1(true);
      setStopType2(true);
      setStopType3(true);
    } else {
      setStopTypeAll(false);
      setStopType1(!stopType1);
      setStopType2(!stopType2);
      setStopType3(!stopType3);
    }
  };

  const onStopChange1 = (evt: React.FormEvent<HTMLInputElement>, stop: boolean) => {
    setStopTypeAll(false);
    setStopType1(stop);
  };
  
  const onStopChange2 = (evt: React.FormEvent<HTMLInputElement>, stop: boolean) => {
    setStopTypeAll(false);
    setStopType2(stop);
  };

  const onStopChange3 = (evt: React.FormEvent<HTMLInputElement>, stop: boolean) => {
    setStopTypeAll(false);
    setStopType3(stop);
  };
    
  // Filter type

  const onFilterTypeChange = (type: boolean) => {
    setFilterTypeCheap(type);
  };


  const onTicketLimitChange = (ticketLimit: number) => {
    setTicketLimit(ticketLimit);
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
        let finalTickets:[] = [];

        if (!data.stop) {
          setLoading(true);
          await getTickets();
        } else {
          const sortTypes: any = []; // 1, 2, 3 | 3, 2, 1 | 2, 1, 3

          if (stopType1) sortTypes.push(1);
          if (stopType2) sortTypes.push(2);
          if (stopType3) sortTypes.push(3);

          
          const filteredTicketsByStops = data.tickets.filter((ticket: any) => {
            if (sortTypes.length === 0 || stopTypeAll){
              return ticket;
            } else
            if (sortTypes.includes(ticket.segments[0].stops.length)){       
              return ticket;
            }
          });

          finalTickets = filteredTicketsByStops;

          if (filterTypeCheap){
            finalTickets = filteredTicketsByStops.slice().sort(sort('price'));
          }

          setTickets(finalTickets.slice(0, ticketLimit));
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

  const sort = (field: string) => {
    return (a: any, b: any) => (a[field] > b[field]) ? 1 : -1;
  };
  
  return (
    <div className={classes.main}>
      <SideBar
        stopTypeAll={stopTypeAll}
        stopType1={stopType1}
        stopType2={stopType2}
        stopType3={stopType3}     
        
        onStopChangeAll={onStopChangeAll}
        onStopChange1={onStopChange1}
        onStopChange2={onStopChange2}
        onStopChange3={onStopChange3}

      />
      <Container
        tickets={ticketList}
        loading={loading}
        ticketLimit={ticketLimit}
        filterTypeCheap={filterTypeCheap}
        onFilterTypeChange={onFilterTypeChange}
        onTicketLimitChange={onTicketLimitChange}
      />
    </div>
 );  
};

export default Body;
