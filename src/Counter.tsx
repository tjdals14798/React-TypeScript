import React, { useReducer } from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type Action = {type: 'INCREASE'} | {type: 'DECREASE'}; // Action을 |으로 연달아 나열

function reducer( state : number, action : Action ): number{
    switch (action.type){
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter(){
    const [count, dispatch] = useReducer(reducer, 0);//  react Hooks에도 typeScript적용
    const onIncrease = () => dispatch({ type : 'INCREASE' });
    const onDecrease = () => dispatch({ type : 'DECREASE' });
    return(
        <Container className='my-3'>
            <h1>{count} {typeof count}</h1>
            <Button onClick={onIncrease}>+1</Button>
            <Button onClick={onDecrease}>-1</Button>
        </Container>
    )
    // 그런데 참고로 useState를 사용 할 때
    // Generics 를 사용하지 않아도 알아서 타입을 유추하기 때문에 생략해도 상관없다.
}export default Counter;