var React = require('react');
var Collapse = require('./collapse.react');
var Item = require('./item.react');

var Colors = {
	white: '#fff',
	dark: '#444',
	blue: '#09c'
};

var App = React.createClass({


	render: function () {
		console.log('app:render', this.state);
		var style = {
			app: {
				flexFlow: 'column'
			},
			toggle: {
				background: Colors.dark,
				borderRadius: 3,
				color: Colors.white,
				padding: 20,
				position: 'absolute',
				top: 10
			}
		};
		return (
			<div className="center" style={style.app}>
				<button onClick={this._toggleItem} style={style.toggle}>
					toggle_item
				</button>
				<Collapse ref="container">
					<Item />
				</Collapse>
			</div>
		);
	},

	_toggleItem: function () {
		// body...
		return this.refs.container.toggle();
	}

});


React.render(
	<App />,
	document.getElementById('app')
);
