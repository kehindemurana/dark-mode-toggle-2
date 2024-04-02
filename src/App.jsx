
import React, { useState } from 'react'
import './App.css'
import Toggle from './components/Toggle'


const App = () => {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className='App' data-theme={isDark ? 'dark' : 'light'}>
    <Toggle handleChange={()=>setIsDark(!isDark)} isChecked={isDark} />
    <h1 className='title'>Hello World</h1>
    <div className='box'>This is a box</div>
    </div>
  )
}

export default App