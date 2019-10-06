(function () {
'use strict';

  angular.module('ShoppingComponentApp', [])
    .controller('BuyController', BuyController)
    .controller('BoughtController', BoughtController)
    .service('ShoppingService',ShoppingService);

  BuyController.$inject = ['$scope', 'ShoppingService'];

  function BuyController($scope, ShoppingService) {

    $scope.items = ShoppingService.getBuy();

    $scope.bought = function (idx) {
	    ShoppingService.bought(idx);
    };
  }

  BoughtController.$inject = ['$scope', 'ShoppingService'];
  function BoughtController($scope, ShoppingService) {

      $scope.items = ShoppingService.getBought();
  }

  function ShoppingService() {
      var buyItems = [
	      { name:'cookies', quantity: '10' },
	      { name:'bottles of milk', quantity: '3' },
	      { name:'sausages', quantity: '8' },
	      { name:'apples', quantity: '5' },
	      { name:'bananas', quantity: '15' },
      ];
      var boughtItems = [];

      this.bought = function (idx) {
          boughtItems.push(buyItems[idx]);
          buyItems.splice(idx,1);
      };

      this.getBuy = function () {
          return buyItems;
      };

	  this.getBought = function () {
		  return boughtItems;
	  };
  }

})();
