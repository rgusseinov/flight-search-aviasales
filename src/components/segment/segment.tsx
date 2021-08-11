import React from "react";
import { convertMinuteToHM, getArrivalTime, getStopsSentense } from "../../utils/utils";
import classes from './segment.module.css';
import cn from 'classnames';

interface segmentProps {
  items: {
    origin: string
    destination: string
    date: any
    stops: any
    duration: number
  }
}

const Segment:React.FC<segmentProps> = ({ items }) => {

    const { origin, destination, date, stops, duration  } = items;
    const durationInMinutes: any = getArrivalTime(date, duration);
    const timeDuration = convertMinuteToHM(duration);
    const stopsSentence = getStopsSentense(stops.length);

 
   return (
      <div className={classes.contentBlockRow}>
        <div className={classes.contentBlock}>
          <span className={classes.contentBlockSecondary}>{origin}-{destination}</span>
          <span className={classes.contentBlockMain}>{date.substr(11, 5)} - {durationInMinutes}</span>
        </div>

        <div className={classes.contentBlock}>
          <span className={classes.contentBlockSecondary}>В пути</span>
          <span className={cn(classes.contentBlockMain, classes.textTimeDuration)} >{timeDuration}</span>
        </div>

        <div className={classes.contentBlock}>
          <span className={classes.contentBlockSecondary}>{stopsSentence}</span>
          <span className={classes.contentBlockMain}>{stops.join(',')} </span>
        </div> 
        
      </div>
    );
};

export default Segment;