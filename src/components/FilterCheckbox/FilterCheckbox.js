import './FilterCheckbox.css';

export default function FilterCheckbox({ onClick, isСheckbox, setIsСheckbox }) {
  
  const handleChange = () => {
    onClick(!isСheckbox);
    setIsСheckbox(!isСheckbox);
  }

  return (
    <label className='checkbox search__checkbox'>
      <input
        type='checkbox'
        className='checkbox__input'
        onChange={handleChange}
        checked={isСheckbox ? true : false}
      />
      <span className='checkbox__switch' />
    </label>
  );
}