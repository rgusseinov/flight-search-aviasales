import React from 'react';
import { ITicket, ticketListProps } from '../../interfaces/ticket';
import TicketItem from '../ticket-item/ticket-item';
import styles from './ticket-list.module.css';

const TicketList: React.FC<ticketListProps> = ({ tickets }) => {
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
    </div>
  );
};

export default TicketList;
