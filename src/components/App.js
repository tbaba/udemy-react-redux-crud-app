import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleCounterPlus = this.handleCounterPlus.bind(this);
    this.handleCounterMinus = this.handleCounterMinus.bind(this);
  }

  handleCounterPlus() {
    const { count } = this.state;

    this.setState({ count: count + 1 });
  }

  handleCounterMinus() {
    const { count } = this.state;

    this.setState({ count: count - 1 });
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <div>
          count: { count }
        </div>
        <div>
          <button
            type="button"
            onClick={this.handleCounterPlus}
          >
            +
          </button>
          <button
            type="button"
            onClick={this.handleCounterMinus}
          >
            -
          </button>
        </div>
      </>
    );
  }
}

const App = () => {
  return (
    <Counter />
  );
}

export default App;
