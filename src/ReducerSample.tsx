import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSampleState, useSampleDispatch } from './SampleContext';

function ReducerSample(){
    const state = useSampleState();
    const dispatch = useSampleDispatch();

    const setCount = () => dispatch({ type : 'SET_COUNT', count : 5});
    const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' });
    const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' });
    const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

    return(
        <Container>
            <Nav> <code>count : </code> {state.count} </Nav>
            <Nav> <code>color : </code> {state.color} </Nav>
            <Nav> <code>text : </code> {state.text}   </Nav>
            <Nav> <code>isGood : </code> {state.isGood ? 'true' : 'false'} </Nav>

            <Button onClick={setCount}> SET_COUNT </Button>
            <Button onClick={setText}>SET_TEXT </Button>
            <Button onClick={setColor}>SET_COLOR </Button>
            <Button onClick={toggleGood}>TOGGLE_GOOD </Button>
        </Container>
    )

}export default ReducerSample;