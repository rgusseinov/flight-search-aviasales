const API_KEY_URL = 'https://front-test.beta.aviasales.ru/search';
const TICKETS_URL = 'https://front-test.beta.aviasales.ru/tickets';

export async function getSearchId(){
  const result = await fetch(API_KEY_URL);
  if (!result.ok) return Promise.reject(`Что то пошло не так: ${result}`);
  const { searchId } = await result.json();  
  return searchId;
}

const requestTickets = async(searchId: string) => {
  return fetch(`${TICKETS_URL}?searchId=${searchId}`);
};

export const getTickets = async() => {
  const searchId = await getSearchId();
  const tickets = [];
  // eslint-disable-next-line no-constant-condition
  while (true){
    const response = await requestTickets(searchId);
    if (response.ok){
      const data = await response.json();   
      tickets.push(...data.tickets);

      if (data.stop){
        break;
      }
    }
  }
  return tickets;
};