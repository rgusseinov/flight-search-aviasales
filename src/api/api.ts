const INIT_URL = 'https://front-test.beta.aviasales.ru/search';

export async function getTickets(){
  const result = await fetch(INIT_URL);
  const jsonResult = result.json();
  jsonResult.then(data => localStorage.setItem('SEARCH_KEY', data.searchId));
  return true;
}
