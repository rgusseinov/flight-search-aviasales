import React from 'react';
import { ITicket, ticketListProps } from '../../interfaces/ticket';
import LoadMore from '../load-more/load-more';
import TicketItem from '../ticket-item/ticket-item';
import styles from './ticket-list.module.css';

const TicketList: React.FC<ticketListProps> = ({ onTicketLimitChange, tickets, totalTickets, ticketLimit }) => {
  return (
    <div className={styles.cardList}>
      {
        tickets && tickets.map((ticket: ITicket, key: number) => {
          return (
            <TicketItem
              key={key}
              price={ticket.price}
              carrier={ticket.carrier}
              segments={ticket.segments}
            />
          );
        })
      }
      { (ticketLimit < totalTickets) ? ( <LoadMore onTicketLimitChange={onTicketLimitChange} /> ) : null }
      
    </div>
  );
};

export default TicketList;

/*

  total: 10

  1 ... 5

  if (current opened < total ) then show load more




*/