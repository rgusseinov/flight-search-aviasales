const INIT_URL = 'https://front-test.beta.aviasales.ru/search';
const TICKETS_URL = `https://front-test.beta.aviasales.ru/tickets?searchId=`;

export async function initiateAPIKey(){
  const result = await fetch(INIT_URL);
  if (!result.ok) return Promise.reject(`Что то пошло не так: ${result}`);
  const jsonResult = result.json();
  return jsonResult.then(data => localStorage.setItem('SEARCH_KEY', data.searchId));
}

export async function getTickets(){
  const API_KEY: string | null = localStorage.getItem('SEARCH_KEY');
  const result = await fetch(`${TICKETS_URL}${API_KEY}`);
  if (!result.ok) return Promise.reject(`Что то пошло не так: ${result.status}`);
  return result.json();
}
