import React, { ChangeEvent, useEffect } from 'react';
import { useState, useMemo } from 'react';
import { getTickets } from '../../api/api';
import { IChecked } from '../../interfaces/filter';
import { ITicket } from '../../interfaces/ticket';
import { filterByStops } from '../../utils/utils';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const Main: React.FC = () => {
  const [allTickets, setAllTickets] = useState<ITicket[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<IChecked>({
    direct: false,
    oneStop: false,
    twoStop: false,
    threeStop: false
  });

  // const allFiltersChecked = filters.direct && filters.oneStop && filters.twoStop && filters.threeStop;

  // 1. Sidebar
  const handleFilterChange = (filterName: string) => {
    setFilters((prevState: IChecked) => {
      const newState = { ...prevState };
      newState[filterName] = !prevState[filterName];
      return newState;
    });
  };

  // 2. Top filters
  const handleAllFiltersChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (checked){
      setFilters({
        direct: true,
        oneStop: true,
        twoStop: true,
        threeStop: true
      });
    } else {
      setFilters({
        direct: false,
        oneStop: false,
        twoStop: false,
        threeStop: false
      });  
    }
  };

  // Use memo
  const showedTickets = useMemo(() => {
    const result:ITicket[] = [];

    // 1. Sidebar filters

    if (filters.direct){
      result.push(...filterByStops(allTickets, 0));
    }

    if (filters.oneStop){
      result.push(...filterByStops(allTickets, 1));
    }

    if (filters.twoStop){
      result.push(...filterByStops(allTickets, 2));
    }
 
    if (filters.threeStop){
      result.push(...filterByStops(allTickets, 3));
    }

    // 2. Sort by (cheap, quick)

    

    return result;
  }, [allTickets, filters]);


  useEffect(() => {
    
    const loadTickets = async() => {
      setLoading(true);
      try {
        const tickets = await getTickets();
        setAllTickets(tickets);
      } catch (err){
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadTickets();
    
  }, []);

  // console.log(`showedTickets`, showedTickets);

  return (
    <div className={classes.main}>
      <SideBar
        onAllFilterChange={handleAllFiltersChange}
        onFilterChange={handleFilterChange}
        filters={filters}
        // checkedAll={allFiltersChecked} // Не нужен. Потом убрать. Вычислять внутри сайдбара
      />
      <Container
        tickets={showedTickets}
        loading={loading}
      />
    </div>
 );  
};

export default Main;
