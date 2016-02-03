var React = require('react/addons');
var Transition = React.addons.TransitionGroup;

var Colors = {
	white: '#fff',
	dark: '#444',
	blue: '#09c'
};

var Lang = {
	toggle_item: 'Toggle Item'
};

var App = React.createClass({
	getInitialState: function() {
		return {
			isExpanded: true 
		};
	},

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
					{Lang.toggle_item}
				</button>
				<Transition>
					{this.state.isExpanded && <Item />}
				</Transition>
			</div>
		);
	},

	_toggleItem: function () {
		this.setState({
			isExpanded: !this.state.isExpanded
		});
	}


});

var Item = React.createClass({
	componentWillAppear: function (callback) {
		console.log('componentWillAppear');
		this._enterStyle();
		setTimeout(callback, 1);
	},

	componentDidAppear: function () {
		console.log('componentDidAppear');
	},

	componentWillEnter: function (callback) {
		console.log('componentWillEnter');
		setTimeout(callback, 1);
	},

	componentDidEnter: function () {
		console.log('componentDidEnter');
		this._enterStyle();
	},

	componentWillLeave: function (callback) {
		console.log('componentWillLeave');
		this._leaveStyle();
		setTimeout(callback, 500);
	},

	componentDidLeave: function () {
		console.log('componentDidLeave');
	},

	render: function () {
		var style = {
			width: 100,
			height: 0,
			background: Colors.blue,
			transition: 'height 1s'
		};
		return <div ref="container" style={style} />;
	},

	_enterStyle: function () {
		var el = this.refs.container.getDOMNode();
		console.log(el.style.height);
		el.style.height = '200px';
		// el.style.opacity = 1;

	},

	_leaveStyle: function () {
		var el = this.refs.container.getDOMNode();
		el.style.height = '0px';
		// el.style.opacity = 0;
	},


});

React.render(
	<App />,
	document.getElementById('app')
);