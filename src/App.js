import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <label htmlFor="text-input">らべる</label>
        <input id="text-input" type="text" onChange={(e) => {console.log(e.target.value)}} />
      </>
    );
  }
}

export default App;
