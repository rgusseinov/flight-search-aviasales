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

  const [sortType, setSortType] = useState<any>([]);
  const [filterType, setFilterType] = useState<any>([]);

  // 1. Filter types // top
  const onFilterTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       
    setFilterType({
      [e.target.value]: e.target.checked
    });

  };


  // 2. Sort type // Side bar
  const onSortTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortType({
      ...sortType,
      [e.target.name]: e.target.checked
    });   
  };

  
  // 3. Lode more button
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

        if (!data.stop) {
          setLoading(true);
          await getTickets();
        } else {
         
      
          const filteredTickets:any  = getFilteredTickets(sortType, filterType, data.tickets);
          setTickets(filteredTickets);
          setLoading(false);
          
          // console.log(`filteredTickets`, filteredTickets);

      }
    } else if (response.status == 404) {
      // await getTickets();
    } else {
      setLoading(true);
      await getTickets();
    }
  };

  const getFilteredTickets = (sortType: any, filterType:any, tickets:[]) => {

    const flightStops:Array<number> = [];
    let ticketList:Array<any> = tickets;

    if (sortType.stop1) flightStops.push(1);
    if (sortType.stop2) flightStops.push(2);
    if (sortType.stop3) flightStops.push(3);    
    
    // console.log(`flightStops`, flightStops);

    if (flightStops.length > 0){
      ticketList = tickets.filter((ticket: any) => {
        if (flightStops.includes(ticket.segments[0].stops.length)){  
          return ticket;
        }
      });
    }

    if (filterType.cheap){
      ticketList = ticketList.slice().sort(sortByCheap('price'));
    } else if (filterType.quick){
      ticketList = ticketList.slice().sort(sortByFast('duration'));
    }
  
    return ticketList;
  };

  const sortByCheap = (field: string) => {
    return (a: any, b: any) => (a[field] > b[field]) ? 1 : -1;
  };

  const sortByFast = (field: string) => {
    return (a: any, b: any) => (a.segments[0][field] > b.segments[0][field]) ? 1 : -1;
  };

  // console.log(`filterType`, filterType);

  return (
    <div className={classes.main}>
      <SideBar
/*         stopTypeAll={stopTypeAll}
        onStopChangeAll={onStopChangeAll}
        onSortTypeChange={onSortTypeChange} */
        sortType={sortType}
        onSortTypeChange={onSortTypeChange}
      />
      <Container
        tickets={ticketList}
        loading={loading}
        ticketLimit={ticketLimit}
        filterType={filterType}
        onFilterTypeChange={onFilterTypeChange}
        onTicketLimitChange={onTicketLimitChange}
        
      />
    </div>
 );  
};

export default Body;
