import React, { useState } from 'react';
import { ITicket } from '../../interfaces/ticket';
import Loader from '../loader/loader';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';
import classes from './container.module.css';


interface Props {
  tickets: ITicket[];
  loading: boolean;
}

const Container: React.FC<Props> = ({ tickets, loading }) => {

  const [sortType, setSortType] = useState<string | undefined>();

  // 2. Sort // top
  const handleSortTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {       
    setSortType(e.target.value);
  };

  console.log(`tickets`, tickets);

  return (
    <div className={classes.content}>
      <SortFilter
        onFilterTypeChange={handleSortTypeChange}
        filterType={sortType}
      />
      { loading ? (<Loader />) : ( <TicketList tickets={tickets} /> ) }
    </div>
  );
};

export default Container;
