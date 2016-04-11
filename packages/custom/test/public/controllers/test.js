(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.test')
    .controller('TestController', TestController);

  TestController.$inject = ['$scope', 'Global', 'Test'];

  function TestController($scope, Global, Test) {
    $scope.global = Global;
    $scope.package = {
      name: 'test'
    };
  }
})();