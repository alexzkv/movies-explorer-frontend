import { useState } from 'react';

import './Input.css';

export default function Input({
    inputType = 'text',
    inputPattern = null,
    inputName,
    inputValue,
    inputPlaceholder = '',
    inputMinLength = 0,
    inputMaxLength = 40,
    inputValidityState,
    onChange,
    onValidityChange,
}) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    e.target.setCustomValidity('');

    if (e.target.name === 'name') {
      let error = e.target.validity.patternMismatch;
      onValidityChange(!error);
      if (error) {
        e.target.setCustomValidity('Поле может содержать только латиницу, кириллицу, пробел или дефис');
        onValidityChange(false);
        setErrorMessage('Поле может содержать только латиницу, кириллицу, пробел или дефис');
      }
    }

    if (e.target.name === 'email') {
      let error = e.target.validity.patternMismatch;
      onValidityChange(!error);
      if (error) {
        setErrorMessage(e.target.validationMessage);
        e.target.setCustomValidity('Некорректные данные');
      }
    }

    if (e.target.validationMessage) {
      onValidityChange(false);
      setErrorMessage(e.target.validationMessage);
    }

    else {
      setErrorMessage('');
      onValidityChange(true);
    }

    onChange(e.target.value);
  }

  let inputClassname = 'input';

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
        pattern={inputPattern}
        placeholder={inputPlaceholder}
        onChange={handleInputChange}
      />
      {!inputValidityState && (<p className='input__error'>{errorMessage}</p>)}
    </>
  );
}
