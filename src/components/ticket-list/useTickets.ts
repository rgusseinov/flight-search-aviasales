import { useMemo } from "react";
import { ITicket } from "../../interfaces/ticket";
import { useTypedSelector } from "../../store";
import { filterByStops, sortByCheap, sortByFast } from "../../utils/utils";

export default () => {
  const { items } = useTypedSelector(({ tickets }) => tickets);
  const filterBy = useTypedSelector(({ filters }) => filters);
  const {sortType} = useTypedSelector(({ sort }) => sort);

  const getFilterTickets = (tickets: ITicket[], sortType: string, filterBy: any) => {
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

    if (sortType && sortType == 'price'){
      result = result.slice().sort(sortByCheap('price'));
    } else if (sortType && sortType == 'duration'){
      result = result.slice().sort(sortByFast('duration'));
    }

    return result;
  }; 

  const tickets = useMemo(() => {
    return getFilterTickets(items, sortType, filterBy);
  }, [items, sortType, filterBy]);

  return tickets;

};