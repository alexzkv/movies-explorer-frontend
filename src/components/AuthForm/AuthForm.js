import { Link } from 'react-router-dom';

import './AuthForm.css';

export default function AuthForm({
  place,
  children,
  onSubmit,
  validityState,
  onValidityChange,
  message
}) {
  const title = place === 'register' ? 'Добро пожаловать!' : 'Рады видеть!';
  const signText = place === 'register' ? 'Зарегистрироваться' : 'Войти';
  const text = place === 'register' ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?';
  const link = place === 'register' ? '/signin' : '/signup';
  const linkText = place === 'register' ? 'Войти' : 'Регистрация';

  const handleFormChange = (e) => {
    onValidityChange(e.currentTarget.checkValidity());
  }

  return(
    <>
      <h1 className='form__title'>{title}</h1>
      <form
        noValidate
        className='form'
        onSubmit={onSubmit}
        onChange={handleFormChange}
      >
        <fieldset className='form__fieldset'>
          {children}
        </fieldset>
        {message && (<span className='form__status' >{message}</span>)}
        <button
          type='submit'
          className='form__submit-button'
          onSubmit={onSubmit}
          disabled={!validityState}
        >
          {signText}
        </button>
      </form>
      <p className='form__text'>
        {`${text} `}
        <Link to={link} className='form__text form__text_link'>
          {linkText}
        </Link>
      </p>
    </>
  );
}