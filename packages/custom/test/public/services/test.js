(function () {
  'use strict';

  angular
    .module('mean.test')
    .factory('Test', Test);

  Test.$inject = [];

  function Test() {
    return {
      name: 'test'
    };
  }
})();
