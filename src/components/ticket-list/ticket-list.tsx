import React, { useState } from 'react';
import { ITicket } from '../../interfaces/ticket';
import { LOAD_MORE_COUNT } from '../../utils/utils';
import LoadMore from '../load-more/load-more';
import TicketItem from '../ticket-item/ticket-item';
import styles from './ticket-list.module.css';
import useTickets from './useTickets';

const TicketList: React.FC = () => {
  const tickets = useTickets();
  const [ticketLimit, setTicketLimit] = useState<number>(LOAD_MORE_COUNT);

  // Lode more button
  const handleTicketLimitChange = () => {
    setTicketLimit(ticketLimit + LOAD_MORE_COUNT);
  };

 

  return (
    <div className={styles.cardList}>
      {
        tickets && tickets.slice(0, ticketLimit).map((ticket: ITicket, index: number) => {
          return (
            <TicketItem
              key={index}
              price={ticket.price}
              carrier={ticket.carrier}
              segments={ticket.segments}
            />
          );
        })
      }
      { (ticketLimit < tickets.length) && <LoadMore onTicketLimitChange={handleTicketLimitChange} /> }
      
    </div>
  );
};

export default TicketList;
