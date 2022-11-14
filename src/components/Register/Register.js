import { useState, useEffect } from 'react';

import './Register.css';

import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import AuthForm from '../AuthForm/AuthForm';

export default function Register({ onRegister, message, setIsErrorMessage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [formValidity, setFormValidity] = useState(false);
  const [nameValidity, setNameValidity] = useState(true);
  const [emailValidity, setEmailValidity] = useState(true);
  const [passwordValidity, setPasswordValidity] = useState(true);

  const handleNameChange = (value) => {
    setName(value);
  }

  const handleEmailChange = (value) => {
    setEmail(value);
  }

  const handlePasswordChange = (value) => {
    setPassword(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, email, password })
  }

  useEffect(() => {
    setIsErrorMessage('');
  }, [setIsErrorMessage]);

  return(
    <section className='sign'>
      <Logo />
      <AuthForm
        place='register'
        onSubmit={handleSubmit}
        validityState={formValidity}
        onValidityChange={setFormValidity}
        message={message}
      >
        <label className='sign__label'>Имя</label>
        <Input
          inputName='name'
          inputPlaceholder='Имя'
          inputMinLength={2}
          inputMaxLength={30}
          onChange={handleNameChange}
          inputValidityState={nameValidity}
          onValidityChange={setNameValidity}
          inputPattern='^[a-zA-Zа-яА-Я0-9\s-]+$'
        />
        <label className='sign__label'>E-mail</label>
        <Input
          inputType='email'
          inputName='email'
          inputPlaceholder='E-mail'
          onChange={handleEmailChange}
          inputValidityState={emailValidity}
          onValidityChange={setEmailValidity}
          inputPattern = '^([^ ]+@[^ ]+\.[a-z]{2,}|)$'
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
        />
      </AuthForm>
    </section>
  );
}