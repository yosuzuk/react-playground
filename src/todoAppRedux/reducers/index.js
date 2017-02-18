import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const reducers = combineReducers({
    todos,
    visibilityFilter
});

export default reducers;


// Syntax alternative without named exports:
//
//
// import { combineReducers } from 'redux';
// import * as todosReducer from './todos';
// import * as visibilityFilterReducer from './visibilityFilter';
//
// export default combineReducers({
//     todos: todosReducer,
//     visibilityFilter: visibilityFilterReducer
// });
//


// Alternative without reducer composition:
//
//
// import { SHOW_ALL } from '../constants/visibilityFilters';
// import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from '../constants/actionTypes';
//
// function reducers(state = {}, action) {
//     switch (action.type) {
//
//         case SET_VISIBILITY_FILTER:
//             return Object.assign({}, state, {
//                 visibilityFilter: action.payload.filter || SHOW_ALL
//             });
//
//             // Alternative syntax in stage 3 proposal:
//             // 
//             // return { ...state, visibilityFilter: action.payload.filter };
//
//         case ADD_TODO:
//             return Object.assign({}, state, {
//                 todos: [
//                     ...state.todos, // existing todos
//                     {
//                         text: action.payload.text,
//                         completed: false
//                     } // new todo
//                 ]
//             });
//
//         case TOGGLE_TODO:
//             return Object.assign({}, state, {
//                 todos: state.todos.map((todo, index) => {
//                     if (index === action.index) {
//                         return Object.assign({}, todo, {
//                             completed: !todo.completed
//                         });
//                     }
//
//                     return todo;
//                 })
//             });
//
//         default:
//             return state;
//     }
// }
// 
// export default reducers;
//
