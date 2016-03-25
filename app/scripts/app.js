var bgoApp = {};

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  bgoApp = document.querySelector('#bgoApp');

  // Sets bgoApp default base URL
  bgoApp.baseUrl = '/';

  if (window.location.port === '') {  // if production
    // Uncomment bgoApp.baseURL below and
    // set bgoApp.baseURL to '/your-pathname/' if running from folder in production
    // bgoApp.baseUrl = '/polymer-starter-kit/';
  }

  bgoApp.firebaseLocation = 'https://bugover.firebaseio.com';

  bgoApp.displayInstalledToast = function() {
    // Check to make sure caching is actually enabled—it won't be in the dev environment.
    if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
      Polymer.dom(document).querySelector('#caching-complete').show();
    }
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  bgoApp.addEventListener('dom-change', function() {
    console.log('Our bgoApp is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  // Scroll page to top and expand header
  bgoApp.scrollPageToTop = function() {
    bgoApp.$.mainHeaderPanel.scrollToTop(true);
  };

  bgoApp.closeDrawer = function() {
    bgoApp.$.paperDrawerPanel.closeDrawer();
  };

  bgoApp.computeArrayKeys = function(obj) {
    return Object.keys(obj).filter(function(key) {
      return obj[key] === true;
    });
  };

  bgoApp.computeGameLocation = function(gameKey) {
    return bgoApp.firebaseLocation + "/games/" + gameKey;
  };

  bgoApp.computeGameNameLocation = function(gameKey) {
    return bgoApp.computeGameLocation(gameKey) + "/name";
  };

  bgoApp.computeIssuesLocation = function(issueKey) {
    return bgoApp.firebaseLocation + "/issues/" + issueKey;
  };

  bgoApp.computeGameUrl = function(gameKey) {
    return bgoApp.baseUrl + "game/" + gameKey;
  };


})(document);
