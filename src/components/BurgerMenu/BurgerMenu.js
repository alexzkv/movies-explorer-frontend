import { NavLink, Link } from 'react-router-dom';

import './BurgerMenu.css';

export default function BurgerMenu({ isVisible, onClose }) {
  return(
    <div className={`header__menu menu-box ${isVisible ? 'menu-box_visible' : ''}`}>
      <div className='menu-box__disappear' />
      <div className='menu'>
        <button
          type='button'
          className='menu__close'
          onClick={onClose} />
        <menu className='menu__list'>
          <li className='menu__list-item'>
            <NavLink
              exact to='/'
              className='menu__link'
              onClick={onClose}
            >Главная
            </NavLink>
          </li>
          <li className='menu__list-item'>
            <NavLink
              to='/movies'
              className='menu__link menu__link_active'
              onClick={onClose}
            >Фильмы
            </NavLink>
          </li>
          <li className='menu__list-item'>
            <NavLink
              to='/saved-movies'
              className='menu__link'
              onClick={onClose}
            >Сохранённые фильмы
            </NavLink>
          </li>
        </menu>
        <Link
          to='/profile'
          className='menu__account'
          onClick={onClose}
        >Аккаунт
          <button className='menu__icon' />
        </Link>
      </div>
    </div>
  );
}