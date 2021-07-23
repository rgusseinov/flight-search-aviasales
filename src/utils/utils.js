export function convertMinuteToHM(minutes){

  let hours, rhours, minute, result = null;
  hours = minutes / 60;
  rhours = Math.floor(hours);
  minute = Math.round((hours - rhours) * 60);

  result = rhours + ':' + minute;
  return result;
}