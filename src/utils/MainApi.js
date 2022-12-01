import { MAIN_API_URL, HEADERS } from './constants'; 

 class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  register({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: HEADERS,
      body: JSON.stringify({ name, email, password }),
    })
    .then(res => this._checkResponse(res));
  }

  login({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: HEADERS,
      body: JSON.stringify({ email, password }),
    })
    .then(res => this._checkResponse(res));
  }

  logout() {
    return fetch(`${this._baseUrl}/users/signout`, {
      method: 'DELETE',
      credentials: 'include',
    })
    .then(res => this._checkResponse(res));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include',
    })
    .then(res => this._checkResponse(res));
  }

  setUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: HEADERS,
      body: JSON.stringify({ name, email }),
    })
    .then(res => this._checkResponse(res));
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: 'include',
    })
    .then(res => this._checkResponse(res));
  }

  saveMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: HEADERS,
      body: JSON.stringify({
        ...data,
      })
    })
    .then(res => this._checkResponse(res));
  }

  deleteMovie(_id) {
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    .then(res => this._checkResponse(res));
  }
}

export default new MainApi(MAIN_API_URL);