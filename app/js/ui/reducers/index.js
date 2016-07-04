const { combineReducers } = require('redux');

const App = combineReducers({
  noop: (state = {}, action) => {
    return state;
  }
});

module.exports = App;
