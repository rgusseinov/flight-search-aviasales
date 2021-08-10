import { useMemo } from "react";
import { ITicket } from "../../interfaces/ticket";
import { useTypedSelector } from "../../store";
import { filterByStops, sortByCheap, sortByFast } from "../../utils/utils";

export default () => {
  const { items } = useTypedSelector(({ tickets }) => tickets);
  const { filterBy, sortBy } = useTypedSelector(({ filters }) => filters);

  const getFilterTickets = (tickets: ITicket[], sortBy: any, filterBy: any) => {
    let result = [];    

    if (filterBy.direct){
      result.push(...filterByStops(tickets, 0));
    }
    
    if (filterBy.oneStop){
      result.push(...filterByStops(tickets, 1));
    }

    if (filterBy.twoStop){
      result.push(...filterByStops(tickets, 2));
    }
 
    if (filterBy.threeStop){
      result.push(...filterByStops(tickets, 3));
    }

    if (sortBy && sortBy == 'price'){
      result = result.slice().sort(sortByCheap('price'));
    } else if (sortBy && sortBy == 'duration'){
      result = result.slice().sort(sortByFast('duration'));
    }

    return result;
  }; 

  const tickets = useMemo(() => {
    return getFilterTickets(items, sortBy, filterBy);
  }, [items, sortBy, filterBy]);

  return tickets;

};