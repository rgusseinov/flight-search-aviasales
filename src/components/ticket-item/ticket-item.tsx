import React from 'react';
import classes from './ticket-item.module.css';

interface TicketItemProps {
  price: number
  carrier: string,
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    }
  ]
}


const TicketItem:React.FC<TicketItemProps> = ({ price, carrier, segments }) => {
 return (
  <div className={classes.cardListItem}>
  <div className={classes.cardListItemHeader}>
    <span> {price} Р  </span>
    <span>{carrier}</span>
  </div>
  <div className={classes.cardListItemContent}>

    {
      segments && segments.map((segment, index) => {
      const originCity = segment.origin;
      const destinationCity = segment.destination;
      const date = segment.date;
      const duration = segment.duration;

       return (
          <div key={index} className={classes.contentBlockRow}>
            <div className={classes.contentBlock}>
              <span className={classes.contentBlockSecondary}>{originCity}</span>
              <span className={classes.contentBlockMain}>{date}</span>
            </div>

            <div className={classes.contentBlock}>
              <span className={classes.contentBlockSecondary}>В пути</span>
              <span className={classes.contentBlockMain}>{duration}</span>
            </div>

            <div className={classes.contentBlock}>
              <span className={classes.contentBlockSecondary}>2 пересадки</span>
              <span className={classes.contentBlockMain}>{destinationCity} </span>
            </div> 
          </div>
        );
    })   
  }
  </div>
  </div>
 );
};

export default TicketItem;
