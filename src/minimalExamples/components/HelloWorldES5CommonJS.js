var React = require('react');

/**
 * Hello World! with just ES5 and in CommonJS module format
 *
 * (equals transpiled result of Webpack)
 */
var HelloWorld = React.createClass({
    render: function() {
        return React.createElement('div', null, 'Hello World!');
    }
});

module.exports = HelloWorld;
