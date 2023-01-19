import React, { useState } from 'react';
import { Button, Nav, Container, Form } from 'react-bootstrap';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);//  react Hooks에도 typeScript적용
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <Container>
      <h1>{count} {typeof count}</h1>
      <Button onClick={onIncrease}>+</Button>
      <Button onClick={onDecrease}>-</Button>
    </Container>
  );
}

export default App;
