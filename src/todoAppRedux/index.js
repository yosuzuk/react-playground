// public API for todoAppRedux
export { default as TodoAppRedux } from './components/TodoAppRedux';
export { default as TodoAppReduxIsolated } from './components/TodoAppReduxIsolated';
export * from './actions';
export { default as reducers } from './reducers';


// This file is useful for composition:
// 
// ...
// import { TodoAppRedux, reducers as todoReducer } from './todoAppRedux';
// import { SomeOtherApp, reducers as otherReducer } from './someOtherApp';
//
// const rootReducer = combineReducers({
//     todoAppRedux: todoReducer,
//     someOtherApp: otherReducer
// });
//
// const store = createStore(rootReducer);
//
// render(
//     <Provider store={store}>
//         <TodoAppRedux />
//         <SomeOtherApp />
//     </Provider>,
//     document.getElementById('root')
// );
// 
//
// Known Issue:
// This example breaks the current "selector" function for the "todo" state sub tree (state depths changes)
//
