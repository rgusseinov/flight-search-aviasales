import { useMemo } from "react";
import { IFilterType } from "../../interfaces/filter";
import { ITicket } from "../../interfaces/ticket";
import { useTypedSelector } from "../../store";
import { filterByStops, sortByCheap, sortByFast } from "../../utils/utils";

export default () => {
  const { items } = useTypedSelector(({ tickets }) => tickets);
  const filterType = useTypedSelector(({ filters }) => filters);
  const {sortType} = useTypedSelector(({ sort }) => sort);

  const getFilterTickets = (tickets: ITicket[], sortType: string, filterType: IFilterType) => {
    let result: ITicket[] = [];    

    if (filterType.direct){
      result.push(...filterByStops(tickets, 0));
    }
    
    if (filterType.oneStop){
      result.push(...filterByStops(tickets, 1));
    }

    if (filterType.twoStop){
      result.push(...filterByStops(tickets, 2));
    }
 
    if (filterType.threeStop){
      result.push(...filterByStops(tickets, 3));
    }

    if (sortType && sortType == 'price'){
      result = result.slice().sort(sortByCheap);
    } else if (sortType && sortType == 'duration'){
      result = result.slice().sort(sortByFast);
    }

    return result;
  }; 

  const tickets = useMemo(() => {
    return getFilterTickets(items, sortType, filterType);
  }, [items, sortType, filterType]);

  return tickets;

};