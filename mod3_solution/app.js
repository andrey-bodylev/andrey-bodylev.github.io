(function () {
'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService',MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .controller('FoundItemsController', FoundItemsController);


    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            restrict: 'E',
            scope: {
                foundItems: '<',
                nothingFound: '<',
                onRemove: '&'
            },
            controller: FoundItemsController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsController() {
        var cont = this;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {

        var cont = this;

        cont.searchTerm = '';
        cont.found = [];

        cont.narrow = function () {
        if (cont.searchTerm) {
            MenuSearchService.getMatchedMenuItems(cont.searchTerm).then(
              function (data) {
                  cont.found = data;
                  cont.nothingFound = !data.length;
              }
            );
        } else {
          cont.nothingFound = true;
        }
    };

      cont.remove = function (idx) {
          cont.found.splice(idx,1);
          cont.nothingFound = !cont.found.length;
      };
    }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {
      this.getMatchedMenuItems = function (searchTerm) {
          return $http({
              method: 'GET',
              url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
          }).then(
              function (result) {
                  var aList = [];
                  result.data.menu_items.forEach(function (elem) {
                    if (elem.description.toLowerCase().includes(searchTerm.toLowerCase())){
                        aList.push(elem);
                    }
                  });
                  return aList;
              }
          );
      }
  }

})();
