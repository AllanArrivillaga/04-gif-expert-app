import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue] = useState();

const handleInputChange=(event)=>{
    setInputValue(event.target.value);
}

const handleSubmit = (event) => {
   event.preventDefault();
   if(inputValue.trim() !== ''){
    setCategories(cats => [...cats, inputValue]);
   }
   }; 

return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        id="name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button >Agregar</button>
    </form>
  )
}
