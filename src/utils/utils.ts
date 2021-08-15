import { ITicket } from "../interfaces/ticket";

export const LOAD_MORE_COUNT = 5;

export function convertMinuteToHM(minutes: number){
  let rhours, minute, result = null;
  const hours = minutes / 60;
  rhours = Math.floor(hours);
  minute = Math.round((hours - rhours) * 60);

  rhours = (rhours < 10) ? `0${rhours}` : rhours;
  minute = (minute < 10) ? `0${minute}` : minute;

  result = `${rhours}ч : ${minute}м`;
  return result;
}

export function getArrivalTime(date: any, durationMinutes: number){
  const newDate = new Date(date);
  newDate.setUTCMinutes(new Date(date).getMinutes() + durationMinutes);
  const h = (newDate.getHours() < 10) ? `0${newDate.getHours()}` : `${newDate.getHours()}`;
  const m = (newDate.getMonth() < 10) ? `0${newDate.getMonth()}` : `${newDate.getMonth()}`;

  return h + ':' + m;
}

export function sortByPrice(ticketA: ITicket, ticketB: ITicket){
  if (ticketA.price > ticketB.price) return 1;
  if (ticketA.price < ticketB.price) return -1;
  return 0;
}

export const sortByFlightTime = (ticketA: ITicket, ticketB: ITicket) => {
  const flightFrom = ticketA.segments[0].duration + ticketA.segments[1].duration;
  const flightTo = ticketB.segments[0].duration + ticketB.segments[1].duration;

  if (flightFrom > flightTo) return 1; else if (flightFrom < flightTo) return -1;
  return 0;
};

export const filterByStops = (tickets:ITicket[], stops: number) => {
  return tickets.filter(ticket => {
    const [first, second] = ticket.segments;
    return first.stops.length === stops && second.stops.length === stops;
  });
};

export const getStopsSentense = (countStops: number) => {
  let stopsSentence: string;
  if (countStops === 0) stopsSentence = `без пересадок`;
  else if (countStops === 1) stopsSentence = `${countStops} пересадка`;
  else if (countStops === 2) stopsSentence = `${countStops} пересадки`;
  else if (countStops === 3) stopsSentence = `${countStops} пересадки`;
  else stopsSentence = `${countStops} пересадок`;
  
  return stopsSentence;
};

export const getCarrierLogo = (carrier: string) => {
  return `https://pics.avs.io/99/36/${carrier}.png`;
};

