import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

export default function Navigation({ place }) {
  return (
    <nav className='navigation'>
      <ul className={`navigation__list navigation__list_place_${place}`}>
        <li className='navigation__list-item'>
          <NavLink 
            to='/movies'
            className='navigation__link navigation__link_active'
          >Фильмы</NavLink>
        </li>
        <li className='navigation__list-item'>
          <NavLink
            to='/saved-movies'
            className='navigation__link'
          >Сохранённые фильмы</NavLink>
        </li>
        <li className='navigation__list-item'>
          <Link to='/profile' className='navigation__account'>
            Аккаунт
            <span className='navigation__icon'/>
          </Link>
        </li>
      </ul>
    </nav>
  );
}