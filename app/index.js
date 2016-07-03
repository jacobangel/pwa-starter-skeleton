require('./style/base.css');
require('./js/ui/app');

const React = require('react');
const { render } = require('react-dom');
const App = require('./js/ui/app');

render(<App />, document.getElementById('root'));
/**
 * this really should be included using a loader!
 */
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./service.js')
           .then(function() { console.log('Service Worker Registered'); });
}
