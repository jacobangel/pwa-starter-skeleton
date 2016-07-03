require('./style/base.css');
console.log('sup!');

/**
 * this really should be included using a loader!
 */
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./service.js')
           .then(function() { console.log('Service Worker Registered'); });
}
