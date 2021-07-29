import React, { useEffect } from 'react';
import { useState } from 'react';
import { initiateAPIKey } from '../../api/api';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const LOAD_MORE_TICKET_COUNT = 5;

const Body: React.FC = () => {

  const [ticketList, setTickets] = useState<any>([]);
  const [ticketLimit, setTicketLimit] = useState<number>(LOAD_MORE_TICKET_COUNT);
  const [loading, setLoading] = useState<boolean>(false);

  const [sortType, setSortType] = useState<any>({
    'stop0': false,
    'stop1': false,
    'stop2': false,
    'stop3': false
  });
  const [filterType, setFilterType] = useState<any>([]);

  // 1. Filter types // top
  const onFilterTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {       
    setFilterType({
      [e.target.value]: e.target.checked
    });
  };

  // 2. Sort type // Side bar
  const onSortTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
/*     if (e.target.name === 'stop0' && e.target.checked){
      setSortType({
        'stop0': true,
        'stop1': true,
        'stop2': true,
        'stop3': true
      });      

    } else if (e.target.name === 'stop0' && !e.target.checked){
      setSortType({
        'stop0': false,
        'stop1': false,
        'stop2': false,
        'stop3': false
      });
    }
 */
    setSortType({
      ...sortType,
      [e.target.name]: e.target.checked
    });
  };
  
  // 3. Lode more button
  const onTicketLimitChange = () => {
    setTicketLimit(ticketLimit + LOAD_MORE_TICKET_COUNT);
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

    console.log(`sortType`, sortType);

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
      
          let filteredTickets:any  = getFilteredTickets(sortType, filterType, data.tickets);
          filteredTickets = filteredTickets.slice(0, ticketLimit);
          setTickets(filteredTickets);
          setLoading(false);
          
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

  return (
    <div className={classes.main}>
      <SideBar
        sortType={sortType}
        onSortTypeChange={onSortTypeChange}
      />
      <Container
        tickets={ticketList}
        loading={loading}
        filterType={filterType}
        onFilterTypeChange={onFilterTypeChange}
        onTicketLimitChange={onTicketLimitChange}        
      />
    </div>
 );  
};

export default Body;
