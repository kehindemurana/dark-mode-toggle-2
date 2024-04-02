import './Toggle.css'


export default function Toggle({handleChange, isChecked}) {
  return (
    <div className='toggle-container'>
      <input
      className='toggle'
      type='checkbox'
      id='check'
      onChange={handleChange}
      checked={isChecked}/>
      <label htmlFor='check'>Dark Mode</label>
    </div>
  )
}



