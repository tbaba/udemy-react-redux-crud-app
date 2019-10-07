import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <>
//         <label htmlFor="text-input">らべる</label>
//         <input id="text-input" type="text" onChange={(e) => {console.log(e.target.value)}} />
//       </>
//     );
//   }
// } 

const App = () => {
  return <div><Cat /></div>;
};

const Cat = () => {
  return <div>Meow!</div>
};

export default App;
