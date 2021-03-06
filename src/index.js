const flickr = require('./flickr');
const doors = require('./doors');

document.addEventListener('DOMContentLoaded', () => {
  Promise.all([doors(), flickr()])
    .then(console.log)
    .catch(console.error);

  // Check that service workers are registered
  if ('serviceWorker' in navigator) {
    // we need better SSL accross the board before this
    // navigator.serviceWorker.register('/dist/sw.js');
  }
});
