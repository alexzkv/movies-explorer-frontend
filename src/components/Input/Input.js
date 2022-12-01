import { useState } from 'react';

import './Input.css';

import { MESSAGE_NOT_CHANGED, MESSAGE_CONTENT, MESSAGE_INCORRECT_DATA } from '../../utils/constants';

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
      e.target.setCustomValidity(MESSAGE_NOT_CHANGED);
      onValidityChange(false);
      setErrorText(MESSAGE_NOT_CHANGED);
    }

    if (e.target.name === 'name') {
      let err = e.target.validity.patternMismatch;
      onValidityChange(!err);
      if (err) {
        e.target.setCustomValidity(MESSAGE_CONTENT);
        onValidityChange(false);
        setErrorText(MESSAGE_CONTENT);
      }
    }

    if (e.target.name === 'email') {
      let err = e.target.validity.patternMismatch;
      onValidityChange(!err);
      if (err) {
        e.target.setCustomValidity(MESSAGE_INCORRECT_DATA);
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
