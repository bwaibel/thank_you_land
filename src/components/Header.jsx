var React = require('react');

function randomThought() {
  var thoughts = [
    "Where everything that is good can be celebrated",
    "Where you get to give back",
    "Celebrating our favorite people"
  ]
  return thoughts[Math.floor(Math.random() * thoughts.length)];
}

module.exports = React.createClass({
  render() {
    return (
      <header>
        <h1>Thank You Land: {randomThought()}</h1>
      </header>
    );
  }
})
