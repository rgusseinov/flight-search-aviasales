import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTickets } from '../../api/api';
import { ITicket } from '../../interfaces/ticket';
import { setFilterAll, setFilterBy, setSortBy } from '../../redux/actions/filters';
import { setTickets } from '../../redux/actions/tickets';
import { useTypedSelector } from '../../redux/useTypesSelector';
import { filterByStops, sortByCheap, sortByFast } from '../../utils/utils';
import Container from '../container/container';
import SideBar from '../sidebar/sidebar';
import classes from './body.module.css';

/* const sortItems = [
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'цене', type: 'duration', order: 'desc'},
];
 */

const Main: React.FC = () => {

  const dispatch = useDispatch();
  const allTickets = useTypedSelector(({ tickets }) => tickets.items);
  const { sortBy, filterBy } = useTypedSelector(({ filters }) => filters);
  
  useEffect(() => {
    const loadTickets = async() => {
      try {
        const tickets = await getTickets();

        const fTicket = filterTickets(tickets, sortBy, filterBy);
        dispatch(setTickets(fTicket));
      } catch (err){
        console.log(err);
      }
    };

    loadTickets();
    
  }, [sortBy, filterBy]);


  const filterTickets = (tickets: ITicket[], sortBy: any, filterBy: any) => {
    const result = [];    

    if (filterBy.direct){
      result.push(...filterByStops(tickets, 0));
    }
    
    if (filterBy.oneStop){
      result.push(...filterByStops(tickets, 1));
    }

    if (filterBy.twoStop){
      result.push(...filterByStops(tickets, 2));
    }
 
    if (filterBy.threeStop){
      result.push(...filterByStops(tickets, 3));
    }


/*     if (sortBy.type == 'price'){
      result = result.slice().sort(sortByCheap('price'));
    } else if (sortBy.type == 'duration'){
      result = result.slice().sort(sortByFast('duration'));
    }
     */

    return result;
  };
  
  // top sort
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

 
  // Left filter

  const handleFilterChange = (filter: string) => {
    console.log(`filterBy`, filterBy);
    dispatch(setFilterBy(filter));
  };


  const handleAllFiltersChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    // console.log(`checked`, checked);
    dispatch(setFilterAll(checked));
  };
  

  // console.log(`filterBy = `, filterBy);

  return (
    <div className={classes.main}>

      <SideBar
        onAllFilterChange={handleAllFiltersChange}
        onFilterChange={handleFilterChange}
        filters={filterBy}
        // checkedAll={allFiltersChecked} // Не нужен. Потом убрать. Вычислять внутри сайдбара
      />
      <Container
        tickets={allTickets}
        onFilterTypeChange={onSelectSortType}
      />
    </div>
 );  
};

export default Main;
