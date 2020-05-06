import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  increment,
  decrement,
} from '../actions';

class App extends Component {
  render() {
    const { props: { value, increment, decrement } } = this;

    return (
      <>
        <div>
          count: { value }
        </div>
        <div>
          <button
            type="button"
            onClick={increment}
          >
            +
          </button>
          <button
            type="button"
            onClick={decrement}
          >
            -
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value });
const mapDispatchToProps = ({ increment, decrement });

export default connect(mapStateToProps, mapDispatchToProps)(App);
