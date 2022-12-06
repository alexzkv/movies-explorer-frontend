import { useState, useEffect } from 'react';

import './Login.css';

import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import AuthForm from '../AuthForm/AuthForm';

export default function Login({ onLogin, message, setIsErrorMessage, isLoading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [formValidity, setFormValidity] = useState(false);
  const [emailValidity, setEmailValidity] = useState(true);
  const [passwordValidity, setPasswordValidity] = useState(true);

  const handleEmailChange = (value) => {
    setEmail(value);
  }

  const handlePasswordChange = (value) => {
    setPassword(value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  }

  useEffect(() => {
    setIsErrorMessage('');
  }, [setIsErrorMessage]);

  return(
    <section className='sign'>
      <Logo />
      <AuthForm
        place='login'
        message={message}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        validityState={formValidity}
        onValidityChange={setFormValidity}
      >
        <label className='sign__label'>E-mail</label>
        <Input
          inputType='email'
          inputName='email'
          inputPlaceholder='E-mail'
          onChange={handleEmailChange}
          inputValidityState={emailValidity}
          onValidityChange={setEmailValidity}
          inputPattern='^([^ ]+@[^ ]+\.[a-z]{2,}|)$'
          disabled={isLoading}
        />
        <label className='sign__label'>Пароль</label>
        <Input
          inputType='password'
          inputName='password'
          inputPlaceholder='Пароль'
          inputMinLength={8}
          onChange={handlePasswordChange}
          inputValidityState={passwordValidity}
          onValidityChange={setPasswordValidity}
          disabled={isLoading}
        />
      </AuthForm>
    </section>
  );
}