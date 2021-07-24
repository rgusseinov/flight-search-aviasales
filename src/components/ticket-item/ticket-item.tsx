import React from 'react';
import { convertMinuteToHM, getArrivalTime } from '../../utils/utils';
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
    <span> {price.toLocaleString()} Р  </span>
    <span className={classes.cardListItemLogo}>
      <img src={`https://pics.avs.io/99/36/${carrier}.png`} />
    </span>
  </div>
  <div className={classes.cardListItemContent}>

    {
      segments && segments.map((segment, index) => {
        const originCity = segment.origin;
        const destinationCity = segment.destination;
        const time = segment.date.substr(11, 5);
        const stops = segment.stops.join(',');
        const duration = getArrivalTime(segment.date, segment.duration);
        const countStops = segment.stops.length;
        const timeDuration = convertMinuteToHM(segment.duration);
        let stopsSentence = '';

        switch (countStops){
          case 1: stopsSentence = `${countStops} пересадка`; break;
          case 2: stopsSentence = `${countStops} пересадки`; break;
          case 3: stopsSentence = `${countStops} пересадки`; break;
          case 0: stopsSentence = `без пересадок`; break;
          default: stopsSentence = `${countStops} пересадок`; break;
        }
        

       return (
          <div key={index} className={classes.contentBlockRow}>
            <div className={classes.contentBlock}>
              <span className={classes.contentBlockSecondary}>{originCity}-{destinationCity}</span>
              <span className={classes.contentBlockMain}>{time} - {duration}</span>
            </div>

            <div className={classes.contentBlock}>
              <span className={classes.contentBlockSecondary}>В пути</span>
              <span className={classes.contentBlockMain}>{timeDuration}</span>
            </div>

            <div className={classes.contentBlock}>
              <span className={classes.contentBlockSecondary}>{stopsSentence}</span>
              <span className={classes.contentBlockMain}>{stops} </span>
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
