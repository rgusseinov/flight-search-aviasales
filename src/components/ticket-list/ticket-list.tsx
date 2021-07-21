import React from 'react';
import TicketItem from '../ticket-item/ticket-item';
import styles from './ticket-list.module.css';

const TicketList = () => {
 return (
  <div className={styles.cardList}>
    <TicketItem />
    <TicketItem />
  </div>
 );
};

export default TicketList;
