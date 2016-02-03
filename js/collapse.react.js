var React = require('react/addons');
var Transition = React.addons.TransitionGroup;

var Collapse = React.createClass({

	propTypes: {
		defaultExpanded: React.PropTypes.bool,
		isExpanded: React.PropTypes.bool,
	},

	getInitialState: function() {
		var defaultExpanded = this.props.defaultExpanded != null?
			this.props.defaultExpanded : false;
		return {
			isExpanded: defaultExpanded
		};
	},

	toggle: function () {
		this.setState({
			isExpanded: !this.state.isExpanded
		});
	},

	show: function () {
		this.setState({
			isExpanded: true
		});
	},

	hide: function () {
		this.setState({
			isExpanded: false
		});
	},


	render: function () {
		console.log('app:render', this.state);
		return (
			<Transition>
				<DummyDiv ref='container'
					children={this.props.children} 
					isExpanded={this.state.isExpanded}>	  
				</DummyDiv>
			</Transition>
		);
	}

});

var DummyDiv = React.createClass({

	getInitialState: function() {
		return {
			isExpanded: this.props.isExpanded 
		};
	},

	toggle: function () {
		this.setState({
			isExpanded: !this.state.isExpanded
		});
	},

	show: function () {
		this.setState({
			isExpanded: true
		});
	},

	hide: function () {
		this.setState({
			isExpanded: false
		});
	},

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
		return (
			<div ref={this.props.ref} id='abcdefg'>
				{this.props.children}
			</div>
		);
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


})


module.exports = Collapse;