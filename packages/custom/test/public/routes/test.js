(function () {
  'use strict';

  angular
    .module('mean.test')
    .config(test);

  test.$inject = ['$stateProvider'];

  function test($stateProvider) {
    $stateProvider.state('test example page', {
      url: '/test/example',
      templateUrl: 'test/views/index.html'
    });
  }

})();
