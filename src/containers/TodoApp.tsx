import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../modules';
import { toggle_todo, remove_todo, add_todo } from '../modules/todos';
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";

function TodoApp(){
    const todos = useSelector((state : RootState) => state.todos);
    const dispatch = useDispatch();

    const onInsert = (text : string) => {
        dispatch(add_todo(text));
    };

    const onToggle = (id : number) => {
        dispatch(toggle_todo(id));
    };

    const onRemove = (id : number) => {
        dispatch(remove_todo(id));
    };

    return(
        <>
            <TodoInsert onInsert = {onInsert} />
            <TodoList todos = {todos} onToggle = {onToggle} onRemove = {onRemove} />
        </>
    );
}

export default TodoApp;