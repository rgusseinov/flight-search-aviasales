import React from 'react';
import { useDispatch } from 'react-redux';
import { ITicket } from '../../interfaces/ticket';
import { setSortBy } from '../../redux/actions/filters';
// import Loader from '../loader/loader';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';
import classes from './container.module.css';

interface Props {
  tickets: ITicket[];
/*   loading: boolean;*/
  // filterType: string | undefined;
  onFilterTypeChange(type: any): void
}

const Container: React.FC<Props> = ({ tickets, onFilterTypeChange }) => {

/*   const dispatch = useDispatch();
  const handleSortTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  }; */
  
  return (
    <div className={classes.content}>
      <SortFilter
        onFilterTypeChange={onFilterTypeChange}
        // filterType={filterType}
      />
      <TicketList tickets={tickets} />
    </div>
  );
};

export default Container;
