import React, { useState } from 'react';
import { ITicket } from '../../interfaces/ticket';
import { LOAD_MORE_COUNT } from '../../utils/utils';
import LoadMore from '../load-more/load-more';
import TicketItem from '../ticket-item/ticket-item';
import styles from './ticket-list.module.css';

interface Props {
  tickets: ITicket[]
}

const TicketList: React.FC<Props> = ({ tickets }) => {

  const [ticketLimit, setTicketLimit] = useState<number>(LOAD_MORE_COUNT);

  // 3. Lode more button
  const handleTicketLimitChange = () => {
    setTicketLimit(ticketLimit + LOAD_MORE_COUNT);
  };

  return (
    <div className={styles.cardList}>
      {
        tickets && tickets.slice(0, ticketLimit).map((ticket: ITicket, key: number) => {
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
      { (ticketLimit < tickets.length) && <LoadMore onTicketLimitChange={handleTicketLimitChange} /> }
      
    </div>
  );
};

export default TicketList;

/*

  total: 10

  1 ... 5

  if (current opened < total ) then show load more




*/