import React, { useState } from 'react';
import { Button, Container} from 'react-bootstrap';
import MyForm from './MyForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);//  react Hooks에도 typeScript적용
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
  <>
    <Container>
      <h1>{count} {typeof count}</h1>
      <Button onClick={onIncrease}>+</Button>
      <Button onClick={onDecrease}>-</Button>
    </Container>
    <MyForm onSubmit ={onSubmit}/>
    
  </>
  );
}

export default App;
