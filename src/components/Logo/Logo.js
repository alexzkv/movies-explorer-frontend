import { Link } from 'react-router-dom';

import './Logo.css';

import logoCircle from '../../images/blue-circle.svg';

export default function Logo() {
  return (
    <Link to='/' className='logo'>
      <img src={ logoCircle } alt='синий круг' />
    </Link>
  );
}