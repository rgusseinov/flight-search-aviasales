import React from 'react';
import LoadMore from '../load-more/load-more';
import Loader from '../loader/loader';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';
import classes from './container.module.css';

interface ticketsProps {
  tickets: []
  loading: boolean
}

const Container: React.FC<ticketsProps> = ({ tickets, loading }) => {
  // console.log(tickets);
  return (
    <div className={classes.content}>
      <SortFilter />
      { loading ? (<Loader />) : (
        <div>
          <TicketList tickets={tickets} />
          <LoadMore />
        </div>
        )
      }
    </div>
  );
};

export default Container;
