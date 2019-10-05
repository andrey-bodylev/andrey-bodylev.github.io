(function () {
'use strict';

  angular.module('LunchCheckerComponentApp', [])
    .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope', '$filter'];

  function LunchCheckerController($scope, $filter) {
    $scope.onClick = function () {
      if (!$scope.list){
	      $scope.message = 'Please enter data first';
      } else {
	      $scope.message = $scope.list.split(',').length > 3 ? 'Too much!' : 'Enjoy!';
      }
    };
  }

})();
