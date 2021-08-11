import React from 'react';
import { ITicket } from '../../interfaces/ticket';
import classes from './ticket-item.module.css';
import Segment from '../segment/segment';
import { getCarrierLogo } from '../../utils/utils';


const TicketItem:React.FC<ITicket> = ({ price, carrier, segments }) => {
  const carrierLogo: any = getCarrierLogo(carrier);

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
      segments && segments.map((segment, key) => {
        <Segment items={segment} key={key} />;
      })
    }
  </div>
  </div>
  );
};

export default TicketItem;
