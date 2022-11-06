import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <label className='checkbox search__checkbox'>
      <input type='checkbox' className='checkbox__input' />
      <span className='checkbox__switch' />
    </label>
  );
}