require('./style/base.css');

const React = require('react');
const { render } = require('react-dom');
const UserInterface = require('./js/ui');

render(<UserInterface />, document.getElementById('root'));
/**
 * this really should be included using a loader!
 */
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./service.js')
           .then(function() { console.log('Service Worker Registered'); });
}
