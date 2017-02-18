import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import FilterableTodoList from '../containers/FilterableTodoList';

export default () => (
    <div>
        <AddTodo />
        <FilterableTodoList />
        <Footer />
    </div>
);
