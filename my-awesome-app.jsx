// import React from 'react';
// import { render } from 'react-dom';
// import { connect, Provider } from 'react-redux';
// import { createStore } from 'redux';

const { render } = ReactDOM;
const { connect, Provider } = ReactRedux;
const { createStore } = Redux;


// Here's a reducer...
const reducer = (state = { name: 'JP' }, action) => {
  switch (action.type) {
    case 'SET_NEW_NAME':
      return { name: action.newName };
    default:
      return state;
  }
};

// ... and store.
const store = createStore(reducer);

// Here we have a functional component with two props: name value and onSetNewName function.
const MyComponent = ({ name, onSetNewName }) => (
  <div>
    <h3>Hi, my name is {name}</h3>
    <input type="text" onChange={onSetNewName} value={name} />
  </div>
);

// Our component's name prop will be mapped to the name value of store ...
const mapStateToProps = state => ({
  name: state.name
});

// ... and our component's onSetNewName prop will be mapped to dispatch
// an action which contains a new name.
const mapDispatchToProps = dispatch => ({
  onSetNewName: e => dispatch({ type: 'SET_NEW_NAME', newName: e.target.value })
});

// Here we connect our component ...
const MyContainer = connect(mapStateToProps, mapDispatchToProps)(MyComponent);

// ... make our store available to connect() calls in the component tree.
// Finally we'll render our container.
render(
  <Provider store={store}>
    <MyContainer />
  </Provider>,
  document.getElementById('root')
);

// console.log('webpack suxxxxx')
//
// let el = document.getElementById('root');
//
// el.innerHTML = "BLAH BLAH BLAH";
