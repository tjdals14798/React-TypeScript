import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// 상태가 null일 수도 있고 아닐수도 있을때 Generics 를 활용하면 좋다.
type MyFormProps = {
    onSubmit: (form: {name: string; description:string|number }) => void;
};

function MyForm({ onSubmit }: MyFormProps){
    const [form, setForm] = useState({
      name: '',
      description: ''
    });

    const { name, description } = form;

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]:value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name:'',
            description:''
        });
    };

    return(
        <>
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type="text" autoFocus placeholder="ID 를 입력하세요" required name="name" value={name} onChange={onChange}/>
                    <Form.Control type="text" placeholder="PASSWORD 를 입력하세요" required className="my-1" name="description" value={description} onChange={onChange}/>
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
            <h1>{name} : {typeof name} {description} : {typeof description}</h1>
        </Container>
        </>
    )
}export default MyForm;