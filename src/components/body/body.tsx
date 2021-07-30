import React, { useEffect } from 'react';
import { useState } from 'react';
import { initiateAPIKey } from '../../api/api';
import { ITicket } from '../../interfaces/ticket';
import { sortByCheap, sortByFast } from '../../utils/utils';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const LOAD_MORE_TICKET_COUNT = 3;

interface IChecked {
  stop1: boolean
  stop2: boolean
  stop3: boolean
}


const Body: React.FC = () => {

  const [ticketList, setTickets] = useState<ITicket[]>([]);
  const [ticketLimit, setTicketLimit] = useState<number>(LOAD_MORE_TICKET_COUNT);
  const [loading, setLoading] = useState<boolean>(false);

  const [filterType, setFilterType] = useState<any>([]);
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState<IChecked>({
    stop1: false,
    stop2: false,
    stop3: false
  });

  // 1. Filters / sidebar
  const toggleCheck = (inputName: string) => {
    setChecked((prevState: any) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  // Filters all / Side bar
  const selectAll = (e: any) => {
    setCheckedAll(e.target.checked);
    setChecked((prevState: any) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = e.target.checked;
      }
      return newState;
    });
  };


  // 2. Sort // top
  const onFilterTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {       
    setFilterType({
      [e.target.value]: e.target.checked
    });
  };

  
  // 3. Lode more button
  const onTicketLimitChange = () => {
    setTicketLimit(ticketLimit + LOAD_MORE_TICKET_COUNT);
  };


  useEffect(() => {

    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }

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
      
          let filteredTickets:any  = getFilteredTickets(checked, filterType, data.tickets);
          filteredTickets = filteredTickets.slice(0, ticketLimit);
          console.log(filteredTickets);
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

  const getFilteredTickets = (checked: any, filterType:any, tickets:[]) => {

    const flightStops:Array<number> = [];
    let ticketList:Array<any> = tickets;

    if (checked.stop1) flightStops.push(1);
    if (checked.stop2) flightStops.push(2);
    if (checked.stop3) flightStops.push(3);
    
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


  return (
    <div className={classes.main}>
      <SideBar
        selectAll={selectAll}
        toggleCheck={toggleCheck}
        checked={checked}
        checkedAll={checkedAll}

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
