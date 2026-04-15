import React, { useState, useCallback } from 'react'

const EmployeeUcb = () => {
  const [employee, setEmployee] = useState({ name: '', age: 0 });
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  const handleNameChange = useCallback((e) => {
    setInputName(e.target.value);
  }, []);

  const handleAgeChange = useCallback((e) => {
    setInputAge(e.target.value);
  }, []);

  const updateName = () => {
    setEmployee(prev => ({ ...prev, name: inputName }));
  };

  const updateAge = () => {
    setEmployee(prev => ({ ...prev, age: parseInt(inputAge) || 0 }));
  };

  return (
    <div>
        <h1>Employee with UseCallback Example</h1>
        <p>Name: {employee.name}</p>
        <p>Age: {employee.age}</p>
        
        <input 
          type="text" 
          placeholder="Enter name" 
          value={inputName} 
          onChange={handleNameChange} 
        />
        <button onClick={updateName}>Update Name</button>
        
        <input 
          type="number" 
          placeholder="Enter age" 
          value={inputAge} 
          onChange={handleAgeChange} 
        />
        <button onClick={updateAge}>Update Age</button>
    </div>
  )
}

export default EmployeeUcb;