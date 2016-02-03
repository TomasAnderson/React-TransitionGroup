var React = require('react');

var Colors = {
	white: '#fff',
	dark: '#444',
	blue: '#09c'
};

var Item = React.createClass({
	render: function () {
		var style = {
			width: 100,
			height: 100,
			background: Colors.blue,
			// transition: 'height 1s'
		};
		return <div style={style} />;
	}
});

module.exports = Item;