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


  // 2. Filter types
  const onFilterTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.dataset;
    
    if (e.target.classList.contains('is-active')){
      e.target.classList.remove('is-active');
      setFilterType({});
    } else {
      e.target.classList.add('is-active');
      setFilterType(type);
    }
    
  };

  const onSortTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Sort`);
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
        // let finalTickets:[] = [];

        if (!data.stop) {
          setLoading(true);
          await getTickets();
        } else {
          // const sortTypes: any = []; // 1, 2, 3 | 3, 2, 1 | 2, 1, 3


/*           const filteredTicketsByStops = data.tickets.filter((ticket: any) => {
            if (sortTypes.length === 0 || stopTypeAll){
              return ticket;
            } else
            if (sortTypes.includes(ticket.segments[0].stops.length)){       
              return ticket;
            }
          }); */

/*           let filteredTickets: [] = filteredTicketsByStops;

          if (filterType.type === 'cheap'){
            filteredTickets = filteredTicketsByStops.slice().sort(sortByCheap('price'));
          } else if (filterType.type === 'quick'){
            filteredTickets = filteredTicketsByStops.slice().sort(sortByFast('duration'));
          } */

          setTickets([]);
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

  const sortByCheap = (field: string) => {
    return (a: any, b: any) => (a[field] > b[field]) ? 1 : -1;
  };

  const sortByFast = (field: string) => {
    return (a: any, b: any) => (a.segments[0][field] > b.segments[0][field]) ? 1 : -1;
  };
  
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
