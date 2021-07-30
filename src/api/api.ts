const INIT_URL = 'https://front-test.beta.aviasales.ru/search';

export async function initiateAPIKey(){
  const result = await fetch(INIT_URL);
  if (!result.ok) return Promise.reject(`Что то пошло не так: ${result}`);
  const jsonResult = result.json();
  return jsonResult.then(data => localStorage.setItem('SEARCH_KEY', data.searchId));
}
