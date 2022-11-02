import './Login.css';

import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

export default function Login({ signError }) {
  return(
    <section className='sign'>
      <Logo />
      <AuthForm place='login'>
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
    </section>
  );
}