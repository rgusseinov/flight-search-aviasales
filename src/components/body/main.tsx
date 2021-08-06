import React, { ChangeEvent, useEffect } from 'react';
import { useState, useMemo } from 'react';
import { getTickets } from '../../api/api';
import { IChecked } from '../../interfaces/filter';
import { ITicket } from '../../interfaces/ticket';
import { filterByStops, sortByCheap, sortByFast } from '../../utils/utils';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

const Main: React.FC = () => {
  const [allTickets, setAllTickets] = useState<ITicket[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // 1. Side bar
  const [filters, setFilters] = useState<IChecked>({
    direct: false,
    oneStop: false,
    twoStop: false,
    threeStop: false
  });
  // 2. Top menu
  const [filterType, setFilterType] = useState<string | undefined>();

  // const allFiltersChecked = filters.direct && filters.oneStop && filters.twoStop && filters.threeStop;

  // 1. Sidebar
  const handleFilterChange = (filterName: string) => {
    setFilters((prevState: IChecked) => {
      const newState = { ...prevState };
      newState[filterName] = !prevState[filterName];
      return newState;
    });
  };

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

  const handleFilterTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterType(e.target.value);
  };

  // Use memo
  const showedTickets = useMemo(() => {
    let result:ITicket[] = [];

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

    if (result.length && filterType == 'cheap'){
      result = result.slice().sort(sortByCheap('price'));
    } else if (result.length && filterType == 'quick'){
      result = result.slice().sort(sortByFast('duration'));
    }

    return result;
  }, [allTickets, filters, filterType]);

  

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
        onAllFilterChange={handleAllFiltersChange}
        onFilterChange={handleFilterChange}
        filters={filters}
        // checkedAll={allFiltersChecked} // Не нужен. Потом убрать. Вычислять внутри сайдбара
      />
      <Container
        onFilterTypeChange={handleFilterTypeChange}
        filterType={filterType}
        tickets={showedTickets}
        loading={loading}
      />
    </div>
 );  
};

export default Main;
