const React = require('react');
const { Provider } = require('react-redux');
const { createStore } = require('redux');
const reducers = require('./reducers');
const App = require('./components/App');

let store = createStore(reducers);

const UserInterface = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

module.exports = UserInterface;
