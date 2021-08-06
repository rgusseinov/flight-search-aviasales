import React, { useState } from 'react';
import { ITicket } from '../../interfaces/ticket';
import Loader from '../loader/loader';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';
import classes from './container.module.css';

interface Props {
  tickets: ITicket[];
  loading: boolean;
  filterType: string | undefined;
  onFilterTypeChange(e: React.SyntheticEvent<EventTarget>): void
}

const Container: React.FC<Props> = ({ onFilterTypeChange, filterType, tickets, loading }) => {

  // const [filterType, setFilterType] = useState<string | undefined>();
/*   const handleSortTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {    
    setFilterType(e.target.value);
  }; */
  
  return (
    <div className={classes.content}>
      <SortFilter
        onFilterTypeChange={onFilterTypeChange}
        filterType={filterType}
      />
      { loading ? (<Loader />) 
      : <TicketList
          tickets={tickets}
        /> }
    </div>
  );
};

export default Container;
