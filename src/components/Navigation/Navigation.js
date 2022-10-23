import { NavLink } from 'react-router-dom';

import './Navigation.css';
// import icon from '../../images/accaunt-icon.svg'

export default function Navigation() {
  return (
    <>
    <nav className='navigation'>
      <NavLink to='/signup' className='navigation__link navigation__link_active'>Регистрация</NavLink>
      <NavLink to='/signin' className='navigation__link'>Войти</NavLink>
      {/* <Routes>
        <NavLink to='/movies' className="navigation__link">Фильмы</NavLink>
        <NavLink to='/saved-movies' className="navigation__link">Сохранённые фильмы</NavLink>
        <NavLink to='/profile'className="navigation__btn">
          <button>
            Аккаунт
            <img src={ icon } alt='иконка аватара' className='navigation__img'/>
          </button>
        </NavLink>
      </Routes> */}
    </nav>
    </>
  );
}