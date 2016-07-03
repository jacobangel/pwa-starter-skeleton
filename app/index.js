require('./style/base.css');
require('./js/ui/app');
console.log('sup!');

/**
 * this really should be included using a loader!
 */
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./service.js')
           .then(function() { console.log('Service Worker Registered'); });
}
