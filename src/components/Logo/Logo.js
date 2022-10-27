import { Link } from 'react-router-dom';

import './Logo.css';
import LogoCircle from '../../images/blue-circle.svg';

export default function Logo() {
  return (
    <Link to='/' className='logo'>
      <img src={ LogoCircle } alt='синий круг' />
    </Link>
  );
}