import React from 'react'
import "./mainInput.css"

const MainInput = ({name, label, value, handleChange, placeholder, type}) => {
  return (
    <div className='test'>
        <input 
        className="input" 
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        />
    </div>
  )
}

export default MainInput