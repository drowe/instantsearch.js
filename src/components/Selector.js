let React = require('react');

class Selector extends React.Component {
  handleChange(event) {
    this.props.setValue(event.target.value);
  }

  render() {
    let {currentValue, options} = this.props;

    let handleChange = this.handleChange.bind(this);

    let label = null;
    if (this.props.label) {
      label = <label>{this.props.label}</label>;
    }

    return (
        <div>
          {label}
          <select
              className={this.props.cssClasses.root}
              defaultValue={currentValue}
              onChange={handleChange}
          >
            {options.map((option) => {
              return <option className={this.props.cssClasses.item} key={option.value} value={option.value}>{option.label}</option>;
            })}
          </select>
        </div>
    );
  }
}

Selector.propTypes = {
  cssClasses: React.PropTypes.shape({
    root: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.arrayOf(React.PropTypes.string)
    ]),
    item: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.arrayOf(React.PropTypes.string)
    ])
  }),
  currentValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]).isRequired,
  label: React.PropTypes.string,
  options: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
      ]).isRequired,
      label: React.PropTypes.string.isRequired
    })
  ).isRequired,
  setValue: React.PropTypes.func.isRequired
};

module.exports = Selector;
