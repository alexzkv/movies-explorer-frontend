import { useState } from 'react';

import './Register.css';

import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';
import Preloader from '../Preloader/Preloader';

export default function Register({ signError, onSignUp }) {
  const [isLoading, setIsLoading] = useState(false);

  return(
    <section className='sign'>
      {!isLoading && (
        <>
          <Logo />
          <AuthForm
            place='register'
          >
            <label className='sign__label'>Имя</label>
            <input
              required
              type='text'
              placeholder='Имя'
              className='sign__input'
            />
            <label className='sign__label'>E-mail</label>
            <input
              required
              type='email'
              placeholder='E-mail'
              className='sign__input'
            />
            <label className='sign__label'>Пароль</label>
            <input
              required
              type='password'
              placeholder='Пароль'
              className='sign__input'
            />
            {!signError && (<p className='sign__error'>Что-то пошло не так...</p>)}
          </AuthForm>
        </>)}
      {isLoading && (<Preloader />)}
    </section>
  );
}