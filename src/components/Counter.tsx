import React from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type CounterProps = {
    count : number;
    onIncrease : () => void;
    onDecrease : () => void;
    onIncreaseBy : (diff : number) => void;
}

function Counter({ count, onIncrease, onDecrease, onIncreaseBy } : CounterProps){
    return (
        <Container>
            <h1>{count}</h1>
            <Button onClick = {onIncrease}> +1 </Button>
            <Button onClick = {onDecrease}> -1 </Button>
            <Button onClick = {() => onIncreaseBy(5)}> +5 </Button>
        </Container>
    );
}export default Counter;