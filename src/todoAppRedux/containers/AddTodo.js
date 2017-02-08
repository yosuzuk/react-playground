import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={
                    e => {
                        e.preventDefault();

                        if (!input.value.trim()) {
                            return;
                        }

                        dispatch(addTodo(input.value));
                        input.value = '';
                    }
                }
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;


// Notes:
// 
// After using react-redux's "connect", the AddTodo gets called with the store.
// Therefore, we can get its "dispatch" function by object destruction.
// 
// Technically, this component is a mix of presentational and container component.
// But it's too small to be worth splitting.
//
// The "ref" attribute takes a callback,
// that gets called with the underlying DOM element as argument when it has been drawn.
//
// Caveat: If the "ref" callback is defined as inline function, like in this file, 
// then it gets called twice per update due to how react works, 
// first with null, then with the underlying DOM element.
//