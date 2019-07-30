import { ADD_TODO, DELETE_TODO, DONE_TODO } from "./ActionsTypes";

let index = 0;
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++index,
        content: content,
    }
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {
        id: id,
    }
});

export const doneTodo = (id) => ({
    type: DONE_TODO,
    payload: { id: id }
});