import React from 'react';
import MyForm from './MyForm';
import Counter from './Counter';
import ReducerSample from './ReducerSample';
import './App.css';

function App() {

  const onSubmit = (form: { name: string; description: string|number }) => {
    console.log(form);
  };

  return (
  <>
    <Counter />
    <MyForm onSubmit ={onSubmit}/>
    <ReducerSample />
  </>
  );
}

export default App;
