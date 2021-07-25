import React from 'react';
// import LoadMore from '../load-more/load-more';
import Loader from '../loader/loader';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';
import classes from './container.module.css';

interface ticketsProps {
  onFilterTypeChange(type: boolean): void
  filterTypeCheap: boolean
  tickets: []
  loading: boolean
}

const Container: React.FC<ticketsProps> = ({ 
  onFilterTypeChange,
  filterTypeCheap,
  tickets, 
  loading,
}) => {
  // console.log(tickets);
  return (
    <div className={classes.content}>
      <SortFilter 
        onFilterTypeChange={onFilterTypeChange}
        filterTypeCheap={filterTypeCheap}
      />
      { loading ? (<Loader />) : (
        <div>
          <TicketList tickets={tickets} />
          {/* <LoadMore /> */}
        </div>
        )
      }
    </div>
  );
};

export default Container;
