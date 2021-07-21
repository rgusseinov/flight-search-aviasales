import React from 'react';
import TicketItem from '../ticket-item/ticket-item';
import styles from './ticket-list.module.css';

interface ticketListProps {
  tickets: Array<any>
}

const TicketList: React.FC<ticketListProps> = ({ tickets }) => {
  console.log(tickets);
  return (
    <div className={styles.cardList}>
      <TicketItem />
    </div>
  );
};

export default TicketList;
