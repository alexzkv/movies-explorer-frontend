import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Navigation({ isMenuOpen, onMenuOpen, onMenuClose }) {
  return (
    <>
      <nav className='navigation'>
        <ul className='navigation__list'>
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
        <button 
          type='button'
          className='navigation__menu-btn'
          onClick={onMenuOpen}
        />
      </nav>
      <BurgerMenu isVisible={isMenuOpen} onClose={onMenuClose} />
    </>
  );
}