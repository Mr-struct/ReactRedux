import { ADD_TODO, DELETE_TODO, DONE_TODO } from "../actions/ActionsTypes";

const initState = {
    list: [{ id: -1, content: "text", done: false }],
}
export default function (state = initState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            console.log(action.type)
            console.log(state)
            return {
                list: [...state.list, { id: id, content: content, done: false }]
            };
        }
        case DONE_TODO: {
            return Object.assign({}, state, {
                list: state.list.map((todo) => {
                    return todo.id === action.payload.id ?
                        Object.assign({}, todo, { done: true }) : todo
                })
            })
        }
        default: {
            return state;
        }
    }
}