import { useState } from 'react';

import './Input.css';

export default function Input({
    inputType = 'text',
    inputPattern = null,
    inputName,
    inputValue,
    inputDefaultValue,
    inputPlaceholder = '',
    inputMinLength = 0,
    inputMaxLength = 40,
    inputValidityState,
    onChange,
    onValidityChange,
    place,
}) {
  const [errorText, setErrorText] = useState('');

  const handleInputChange = (e) => {
    e.target.setCustomValidity('');

    if (e.target.value === inputDefaultValue) {
      e.target.setCustomValidity('Данные не были изменены');
      onValidityChange(false);
      setErrorText('Данные не были изменены');
    }

    if (e.target.name === 'name') {
      let err = e.target.validity.patternMismatch;
      onValidityChange(!err);
      if (err) {
        e.target.setCustomValidity('Поле может содержать только латиницу, кириллицу, пробел или дефис');
        onValidityChange(false);
        setErrorText('Поле может содержать только латиницу, кириллицу, пробел или дефис');
      }
    }

    if (e.target.name === 'email') {
      let err = e.target.validity.patternMismatch;
      onValidityChange(!err);
      if (err) {
        e.target.setCustomValidity('Некорректные данные');
        setErrorText(e.target.validationMessage);
      }
    }

    if (e.target.validationMessage) {
      onValidityChange(false);
      setErrorText(e.target.validationMessage);
    }

    else {
      onValidityChange(true);
      setErrorText('');
    }

    onChange(e.target.value);
  }

  const inputBaseClassname = 'input';
  let inputClassname;

  if (place === 'profile') {
    inputClassname = inputBaseClassname + ' input_profile';
  } else {
    inputClassname = inputBaseClassname;
  }

  if (!inputValidityState) {
    inputClassname += ' input_invalid';
  }

  return(
    <>
      <input
        required
        type={inputType}
        name={inputName}
        value={inputValue}
        className={inputClassname}
        minLength={inputMinLength}
        maxLength={inputMaxLength}
        placeholder={inputPlaceholder}
        onChange={handleInputChange}
        pattern={inputPattern}
      />
      {!inputValidityState && (
        <p className='input__error'>{errorText}</p>
      )}
    </>
  );
}
