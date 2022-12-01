import { MOVIES_API_URL, HEADERS } from './constants';

class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: HEADERS,
    })
    .then(res => this._checkResponse(res));
  }
}

export default new MoviesApi(MOVIES_API_URL);