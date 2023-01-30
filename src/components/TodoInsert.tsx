import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

type TodoInsertProps = {
    onInsert : (text : string) => void;
};

function TodoInsert({ onInsert } : TodoInsertProps){
    const [value, setValue] = useState('');

    const onChange = (e : ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = (e : FormEvent) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    }

    return(
        <Container>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>할 일</Form.Label>
                    <Form.Control placeholder="할 일을 입력하세요" value = {value} onChange = {onChange}/>
                </Form.Group>
                <Button variant="primary" type="submit"> 등록 </Button>
            </Form>
        </Container>
    )

}

export default TodoInsert;