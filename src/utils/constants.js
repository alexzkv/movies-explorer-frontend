const MOVIES_API_URL = 'https://api.nomoreparties.co/beatfilm-movies';
// const MAIN_API_URL = 'https://api.bestmovie.nomoredomains.icu';

const MAIN_API_URL = 'http://localhost:3000';
const HEADERS = { 'Content-Type': 'application/json' };

const SHORT_DURATION = 40;
const TIME_DURATION = 60;
const LARGE_SCREEN_SIZE = 1280;
const MEDIUM_SCREEN_SIZE = 768;
const SMALL_SCREEN_SIZE = 480;
const CARDS_FOR_LARGE_SIZE = 12;
const CARDS_FOR_MEDIUM_SIZE = 8;
const CARDS_FOR_SMALL_SIZE = 5;
const CARDS_ADD_LARGE = 3;
const CARDS_ADD_MEDIUM = 2;

const ERROR_CODE_BAD_REQUEST = 400;
const ERROR_CODE_UNAUTHORIZED = 401;

const SET_TIMEOUT_ERROR = 3000;

const ERROR_MESSAGE_EMAIL = 'Пользователь с таким email уже существует.';
const ERROR_MESSAGE_REGISTRATION = 'При регистрации пользователя произошла ошибка.';
const ERROR_MESSAGE_INVALID = 'Вы ввели неправильный логин или пароль.';
const ERROR_MESSAGE_AUTHORIZATION = 'При авторизации произошла ошибка.';
const ERROR_MESSAGE_UPDATING_PROFILE = 'При обновлении профиля произошла ошибка.';

const MESSAGE_NOT_CHANGED = 'Данные не были изменены';
const MESSAGE_CONTENT = 'Поле может содержать только латиницу, кириллицу, пробел или дефис';
const MESSAGE_INCORRECT_DATA = 'Некорректные данные';
const MESSAGE_NOT_FOUND = 'Ничего не найдено.';
const MESSAGE_REQUEST_ERROR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
const MESSAGE_KEYWORD = 'Нужно ввести ключевое слово.';
const MESSAGE_SUCCESS = 'Данные успешно изменены!';

export { 
  MOVIES_API_URL,
  MAIN_API_URL,
  HEADERS,
  SHORT_DURATION,
  TIME_DURATION,
  LARGE_SCREEN_SIZE,
  MEDIUM_SCREEN_SIZE,
  SMALL_SCREEN_SIZE,
  CARDS_FOR_LARGE_SIZE,
  CARDS_FOR_MEDIUM_SIZE,
  CARDS_FOR_SMALL_SIZE,
  CARDS_ADD_LARGE,
  CARDS_ADD_MEDIUM,
  ERROR_CODE_BAD_REQUEST,
  ERROR_CODE_UNAUTHORIZED,
  SET_TIMEOUT_ERROR,
  ERROR_MESSAGE_EMAIL,
  ERROR_MESSAGE_REGISTRATION,
  ERROR_MESSAGE_INVALID,
  ERROR_MESSAGE_AUTHORIZATION,
  ERROR_MESSAGE_UPDATING_PROFILE,
  MESSAGE_NOT_CHANGED,
  MESSAGE_CONTENT,
  MESSAGE_INCORRECT_DATA,
  MESSAGE_NOT_FOUND,
  MESSAGE_REQUEST_ERROR,
  MESSAGE_KEYWORD,
  MESSAGE_SUCCESS,
};