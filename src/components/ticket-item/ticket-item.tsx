import React from 'react';
import { ITicket } from '../../interfaces/ticket';
import classes from './ticket-item.module.css';
import { getCarrierLogo } from '../../utils/utils';
import Segment from './segment';

const TicketItem:React.FC<ITicket> = ({ price, carrier, segments }) => {
  const carrierLogo: string = getCarrierLogo(carrier);

  return (
    <div className={classes.cardListItem}>
    <div className={classes.cardListItemHeader}>
      <span> {price.toLocaleString()} Р  </span>
      <span className={classes.cardListItemLogo}>
        <img src={carrierLogo} />
      </span>
    </div>
    <div className={classes.cardListItemContent}>
      {
        segments && segments.map((segment) => {
          return <Segment items={segment} key={segment.origin} />;
        })
      }
    </div>
    </div>
  );
};

export default TicketItem;
