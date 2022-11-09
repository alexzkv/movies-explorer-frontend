import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

export default function Header({ place, loggedIn }) {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  function openMenu() {
    setisMenuOpen(true);
  }

  function closeMenu() {
    setisMenuOpen(false);
  }

  let headerPlace;

  switch (place) {
    case 'main': {
      headerPlace = 'header_place_main';
      break;
    }
    case 'profile': {
      headerPlace = 'header_place_profile';
      break;
    }
    default: {
      headerPlace = '';
    }
  }
  
  return (
    <header className={`header ${headerPlace}`}>
      <Logo />
      { !loggedIn
        ? (
          <div className='header__box'>
            <NavLink to='/signup'className='header__link header__link_active'>
              Регистрация
            </NavLink>
            <NavLink to='/signin' className='header__link'>Войти</NavLink>
          </div>
         )
        : (
            <Navigation
              isMenuOpen={isMenuOpen}
              onMenuOpen={openMenu}
              onMenuClose={closeMenu}
            />
          )
      }
    </header>
  );
}