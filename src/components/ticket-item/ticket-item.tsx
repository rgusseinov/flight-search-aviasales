import React from 'react';
import classes from './ticket-item.module.css';


const TicketItem = () => {
 return (
  <div className={classes.cardListItem}>
  <div className={classes.cardListItemHeader}>
    <span> 13 400 Р  </span>
    <span className={classes.cardListItemHeader}></span>
  </div>
  <div className={classes.cardListItemContent}>

    <div className={classes.contentBlockRow}>

      <div className={classes.contentBlock}>
        <span className={classes.contentBlockSecondary}>MOW – HKT</span>
        <span className={classes.contentBlockMain}>10:45 – 08:00</span>
      </div>

      <div className={classes.contentBlock}>
        <span className={classes.contentBlockSecondary}>В пути</span>
        <span className={classes.contentBlockMain}>21ч 15 м</span>
      </div>

      <div className={classes.contentBlock}>
        <span className={classes.contentBlockSecondary}>2 пересадки</span>
        <span className={classes.contentBlockMain}>HHK </span>
      </div>
      
    </div>
    
    <div className={classes.contentBlockRow}>
      <div className={classes.contentBlock}>
        <span className={classes.contentBlockSecondary}>MOW – HKT</span>
        <span className={classes.contentBlockMain}>10:45 – 08:00</span>
      </div>

      <div className={classes.contentBlock}>
        <span className={classes.contentBlockSecondary}>В пути</span>
        <span className={classes.contentBlockMain}>21ч 15 м</span>
      </div>

      <div className={classes.contentBlock}>
        <span className={classes.contentBlockSecondary}>2 пересадки</span>
        <span className={classes.contentBlockMain}>HHK </span>
      </div>
    </div>

  </div>
  </div>
 );
};

export default TicketItem;
