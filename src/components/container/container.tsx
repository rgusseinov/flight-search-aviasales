import React from 'react';
import { ITicket } from '../../interfaces/ticket';
import LoadMore from '../load-more/load-more';
import Loader from '../loader/loader';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';
import classes from './container.module.css';


interface ticketsProps {
  onFilterTypeChange(e: React.SyntheticEvent<EventTarget>): void
  onTicketLimitChange(e: React.SyntheticEvent<EventTarget>): void
  filterType: any
  tickets: ITicket[]
  loading: boolean
}

const Container: React.FC<ticketsProps> = ({
  onFilterTypeChange,
  onTicketLimitChange,
  filterType,
  tickets,
  loading,
}) => {
  return (
    <div className={classes.content}>
      <SortFilter
        onFilterTypeChange={onFilterTypeChange}
        filterType={filterType}
      />
      { loading ? (<Loader />) : (
        <div>
          <TicketList tickets={tickets} />
          <LoadMore
            onTicketLimitChange={onTicketLimitChange}
          />
        </div>
        )
      }
    </div>
  );
};

export default Container;
