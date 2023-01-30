const ADD_TODO = "todos/ADD_TODO" as const ;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1;

export const add_todo = (text : string) => ({
    type : ADD_TODO,
    payload : {
        id : nextId++,
        text
    }
});

export const toggle_todo = (id : number) => ({
    type : TOGGLE_TODO,
    payload : id
});

export const remove_todo = (id : number) => ({
    type : REMOVE_TODO,
    payload : id
});

type TodosAction = 
    | ReturnType <typeof add_todo>
    | ReturnType <typeof toggle_todo>
    | ReturnType <typeof remove_todo>;

export type Todo = {
    id : number;
    text : string;
    done : boolean;
};

export type TodosState = Todo[]; //Todo 객체로 이루어진 배열
const initialState : TodosState = [];

function todos(state : TodosState = initialState, action : TodosAction) : TodosState {
    switch(action.type){
        case ADD_TODO :
            return state.concat ({
                id : action.payload.id,
                text : action.payload.text,
                done : false
            });
        case TOGGLE_TODO :
            return state.map(todo => 
                todo.id === action.payload ? {...todo, done : !todo.done} : todo);
        case REMOVE_TODO :
            return state.filter(todo => todo.id !== action.payload);
        default :
            return state;
    }
}

export default todos;