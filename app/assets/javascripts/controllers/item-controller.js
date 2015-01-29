app.controller('ItemController', ['$scope', 'ItemService', '$route', 'CharFactory', function($scope, ItemService, $route, CharFactory) {
  ItemService.getItem($route.current.params.id).success(function(data) {
    if (data.name === undefined) {
      ItemService.getAvailableContexts($route.current.params.id, data.availableContexts[0]).success(function(data) {
        $scope.item = data;
        $scope.hasNameDescription = function() {
          if ($scope.item.nameDescription === "") {
            return false;
          } else {
            return true;
          };
        };
        ItemService.getItemSubClasses().success(function(data) {
          $scope.itemSubClasses = data.classes;
          for(var i = 0;i < $scope.itemSubClasses.length;i++) {
            if($scope.item.itemClass == $scope.itemSubClasses[i].class) {
              $scope.itemClass = $scope.itemSubClasses[i];
              break;
            }
          };
          for(var i = 0;i < $scope.itemClass.subclasses.length;i++) {
            if($scope.item.itemSubClass == $scope.itemClass.subclasses[i].subclass) {
              $scope.itemSubClass = $scope.itemClass.subclasses[i].name;
              break;
            }
          };
        });
        $scope.sellPrice = ItemService.getSellPrice($scope.item.sellPrice);
      });
    } else {
      $scope.item = data;
      $scope.hasNameDescription = function() {
        if ($scope.item.nameDescription === "") {
          return false;
        } else {
          return true;
        };
      };
      ItemService.getItemSubClasses().success(function(data) {
        $scope.itemSubClasses = data.classes;
        for(var i = 0;i < $scope.itemSubClasses.length;i++) {
          if($scope.item.itemClass == $scope.itemSubClasses[i].class) {
            $scope.itemClass = $scope.itemSubClasses[i];
            break;
          }
        };
        for(var i = 0;i < $scope.itemClass.subclasses.length;i++) {
          if($scope.item.itemSubClass == $scope.itemClass.subclasses[i].subclass) {
            $scope.itemSubClass = $scope.itemClass.subclasses[i].name;
            break;
          }
        };
      });
      $scope.sellPrice = ItemService.getSellPrice($scope.item.sellPrice);
    };
  });
  $scope.predicate = function(stats) {
    if (stats.stat > 70) {
      return 2;
    } else {
      return stats.stat;
    }
  };
  $scope.races = CharFactory.race;
  $scope.classes = CharFactory.class;
  $scope.itemStats = ItemService.itemStats;
  $scope.itemBind = ItemService.itemBind;
  $scope.itemClass = ItemService.itemClass;
  $scope.inventoryType = ItemService.inventoryType;
  $scope.isLast = function(i, array) {
    if(i !== array[array.length - 1]) {
      return true;
    } else {
      return false;
    }
  };
}]);