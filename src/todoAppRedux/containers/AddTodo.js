import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

export const AddTodo = ({ dispatch }) => {
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

export default connect()(AddTodo);


// Notes:
// 
// Using react-redux's "connect" makes the store's "dispatch" function available via props.
// 
// Technically, this component is a mix of presentational and container component.
// But it's too small to be worth splitting.
//
// While the default export should be "connected()(AddTodo)",
// exporting the original "AddTodo" is also helpful to have it testable without Redux.
//
// The "ref" attribute takes a callback,
// that gets called with the underlying DOM element as argument when it has been drawn.
//
// Caveat: If the "ref" callback is defined as inline function, like in this file, 
// then it gets called twice per update due to how react works, 
// first with null, then with the underlying DOM element.
//
