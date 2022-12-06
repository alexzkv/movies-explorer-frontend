import { useContext, useState } from 'react';

import './Profile.css';

import Header from '../Header/Header';
import Input from '../Input/Input';

import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function Profile({ loggedIn, onLogout, onUpdateUser, isMessageSuccess, isLoading }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  const [formValidity, setFormValidity] = useState(false);
  const [nameValidity, setNameValidity] = useState(true);
  const [emailValidity, setEmailValidity] = useState(true);

  const isSubmitDisabled = (
    name !== currentUser.name || email !== currentUser.email) && (emailValidity || nameValidity || isLoading
  );
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name, email });
  }

  const handleFormChange = (e) => {
    setFormValidity(e.currentTarget.checkValidity());
  }

  return (
    <>
      <Header place='profile' loggedIn={loggedIn}/>
      <main className='profile'>
        <h1 className='profile__title'>{`Привет, ${currentUser?.name}!`}</h1>
        <form
          noValidate
          className='profile__form'
          onSubmit={handleSubmit}
          onChange={handleFormChange}
        >
          <div className='profile__box'>
            <label className='profile__label'>Имя</label>
            <Input
              place='profile'
              inputName='name'
              inputValue={name}
              inputDefaultValue={currentUser?.name}
              inputMinLength={2}
              inputMaxLength={30}
              onChange={setName}
              onValidityChange={setNameValidity}
              inputValidityState={nameValidity}
              inputPattern='^[a-zA-Zа-яА-Я0-9\s-]+$'
              disabled={isLoading}
            />
          </div>
          <div className='profile__box'>
            <label className='profile__label'>E-mail</label>
            <Input
              place='profile'
              inputType='email'
              inputName='email'
              inputValue={email}
              inputDefaultValue={currentUser?.email}
              onChange={setEmail}
              onValidityChange={setEmailValidity}
              inputValidityState={emailValidity}
              inputPattern='^([^ ]+@[^ ]+\.[a-z]{2,}|)$'
              disabled={isLoading}
            />
          </div>
          {isMessageSuccess && (<p className='profile__status'>{isMessageSuccess}</p>)}
          <button
            type='submit'
            className='profile__button'
            disabled={!formValidity || !isSubmitDisabled}
          >Редактировать</button>
          </form>
        <button
          type='button'
          className='profile__button profile__button_type_signout'
          onClick={onLogout}
        >Выйти из аккаунта</button>
      </main>
    </>
  );
}