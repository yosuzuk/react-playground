import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import * as VisibilityFilters from './constants/visibilityFilters';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

const store = createStore(
    todoApp,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const TodoAppRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default TodoAppRedux;


// Standalone alternative:
//
// 
// import { render } from 'react-dom';
//
// ...
// 
// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
//
