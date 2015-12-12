var Badge = React.createClass({
  render: function() {
    return <button className="btn btn-primary" type="button">
      {this.props.title} <span className="badge">{this.props.number}</span>
    </button>
  }
});

var Form = React.createClass({
  render: function() {
    return <div>
      <Badge title = {this.props.title} number = {this.props.number} />
    </div>
  }
});

// create Form
var options = {
  title: 'Inbox',
  number: 5
};

React.createElement(Form, options)
