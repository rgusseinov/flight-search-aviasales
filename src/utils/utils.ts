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

export const sortByCheap = (field: any) => {
  return (a: any, b:any) => (a[field] > b[field]) ? 1 : -1;
};

export const sortByFast = (field: any) => {
  return (a:any, b:any) => (a.segments[0][field] > b.segments[0][field]) ? 1 : -1;
};

export const LOAD_MORE_COUNT = 2;
