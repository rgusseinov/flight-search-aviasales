import React from 'react';
import TicketItem from '../ticket-item/ticket-item';
import styles from './ticket-list.module.css';

interface ticketListProps {
  tickets: Array<any>
}

const TicketList: React.FC<ticketListProps> = ({ tickets }) => {
  return (
    <div className={styles.cardList}>
      {
        tickets && tickets.map((ticket, key) => {
          
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
