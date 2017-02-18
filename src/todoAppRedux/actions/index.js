import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../constants/actionTypes';

let nextTodoId = 0;

export const addTodo = text => ({
    type: ADD_TODO,
    payload: {
        id: nextTodoId++,
        text
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    payload: {
        filter
    }
});


// Alternative implementation with named default export:
//
//
// ...
//
// const actions = {
//     addTodo(text) {
//         return {
//             type: ADD_TODO,
//             payload: {
//                 id: nextTodoId++,
//                 text
//             }
//         };
//     },
//     toggleTodo(id) {
//         ...
//     },
//     ...
// };
//
// export default actions;
//
