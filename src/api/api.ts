const INIT_URL = 'https://front-test.beta.aviasales.ru/search';

class API {

  constructor(){
    this.initAPI();
  }
  
  async initAPI() {
    const result = await fetch(INIT_URL);
    if (!result.ok) return Promise.reject(`Что то пошло не так: ${result}`);
    return result.json();
  }


}

export default new API;