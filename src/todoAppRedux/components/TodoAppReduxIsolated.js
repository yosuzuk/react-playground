import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import TodoAppRedux from './TodoAppRedux';

class TodoAppReduxIsolated extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(reducers);
  }

  render() {
    return (
      <Provider store={this.store}>
        <TodoAppRedux />
      </Provider>
    )
  }
}

export default TodoAppReduxIsolated;
