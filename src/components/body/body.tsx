import React, { ChangeEvent, useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { getTickets } from '../../api/api';
import { IChecked } from '../../interfaces/filter';
import { ITicket } from '../../interfaces/ticket';
import { filterByStops } from '../../utils/utils';
// import { LOAD_MORE_COUNT, sortByCheap, sortByFast } from '../../utils/utils';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const Body: React.FC = () => {

  const [allTickets, setAllTickets] = useState<ITicket[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const [filters, setFilters] = useState<IChecked>({
    direct: false,
    oneStop: false,
    twoStop: false,
    threeStop: false
  });

  const allFiltersChecked = filters.direct && filters.oneStop && filters.twoStop && filters.threeStop;

  // 1. sidebar
  const handleFilterChange = (inputName: string) => {
    setFilters((prevState: IChecked) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  // Filters all / Side bar
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

  return (
    <div className={classes.main}>
      <SideBar
        selectAll={handleAllFiltersChange}
        toggleCheck={handleFilterChange}
        checked={filters}
        checkedAll={allFiltersChecked} // Не нужен. Потом убрать. Вычислять внутри сайдбара
      />
      <Container
        tickets={showedTickets}
        loading={loading}
      />
    </div>
 );  
};

export default Body;
