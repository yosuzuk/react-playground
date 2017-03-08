define(function(require) {

    var React = require('react');

    /**
     * Hello World! with just ES5 and AMD module format
     */
    var HelloWorld = React.createClass({
        render: function() {
            return React.createElement('div', null, 'Hello World!');
        }
    });

    return HelloWorld;
});
