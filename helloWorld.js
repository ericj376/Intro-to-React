var HelloWorld = React.createClass({
	render: function(){
		return (
			<div>
			<h3> Hello World! </h3>
			</div>
		)
	}
});


var GoodbyeWorld = React.createClass({
	render: function(){

		var sentence = "peace out homie!"
		
		return (
			<div>
			<h3> {sentence} </h3>
			</div>
		)
	}
});

var App = React.createClass({
	render: function(){		
		return (
			<div>
			< HelloWorld />
			< GoodbyeWorld />
			</div>
		)
	}
});


React.render(<App/>, document.getElementById('app'));

