(function() {
"use strict";

angular.module('common', [])
//goddamned heroku doesnt work because of some certificates error, so I'm using standard :((
.constant('ApiPath', 'https://www.davidchuschinabistro.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
