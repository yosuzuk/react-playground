import React from 'react';
import HelloWorldES6Minimal from './HelloWorldES6Minimal';
import HelloWorldES6Class from './HelloWorldES6Class';
import HelloWorldES6Clean from './HelloWorldES6Clean';
import HelloWorldES5CommonJS from './HelloWorldES5CommonJS';

/**
 * Combines Hello World examples
 *
 * (for now skipping HelloWorldES5AMD as "define" is not allowed in the current setup)
 */
const HelloWorlds = () => (
    <div>
        <HelloWorldES6Minimal />
        <HelloWorldES6Class />
        <HelloWorldES6Clean />
        <HelloWorldES5CommonJS />
    </div>
);

export default HelloWorlds;
