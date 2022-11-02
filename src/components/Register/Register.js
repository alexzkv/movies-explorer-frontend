import React from 'react';

import './Register.css';

import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

export default function Register({ registerError }) {
  return(
    <section className='register'>
      <Logo />
      <AuthForm place='register'>
        <label className='register__label'>Имя</label>
        <input
          required
          type='text'
          placeholder='Имя'
          className='register__input'
        />
        <label className='register__label'>E-mail</label>
        <input
          required
          type='email'
          placeholder='E-mail'
          className='register__input'
        />
        <label className='register__label'>Пароль</label>
        <input
          required
          type='password'
          placeholder='Пароль'
          className='register__input'
        />
        {!registerError && (<p className='register__error'>Что-то пошло не так...</p>)}
      </AuthForm>
    </section>
  );
}