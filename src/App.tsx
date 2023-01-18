import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import './App.css';

function App() {
  type Name = string | number;
  let name1 :Name = "123";
  let num : Name = 123;

  return (
    <div className="App">
      <Nav>{name1} {typeof name1}</Nav>
      <Nav>{num} {typeof num }</Nav>
    </div>
  );
}

export default App;
