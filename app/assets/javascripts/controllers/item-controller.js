app.controller('ItemController', ['$scope', 'ItemService', '$route', 'CharFactory', function($scope, ItemService, $route, CharFactory) {
  ItemService.getItem($route.current.params.id).success(function(data) {
    if (data.name === undefined) {
      ItemService.getAvailableContexts($route.current.params.id, data.availableContexts[0]).success(function(data) {
        $scope.item = data;
        ItemService.getItemSubClasses().success(function(data) {
          itemSubClass(data);
        });
      });
    } else {
      $scope.item = data;
      ItemService.getItemSubClasses().success(function(data) {
        itemSubClass(data);
      });
    };
  });
  var itemSubClass = function(data) {
    $scope.itemSubClasses = data.classes;
    $scope.hasNameDescription = ItemService.hasNameDescription;
    $scope.sellPrice = ItemService.getSellPrice($scope.item.sellPrice);
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
  }
  $scope.predicate = ItemService.predicate;
  $scope.races = CharFactory.race;
  $scope.classes = CharFactory.class;
  $scope.itemStats = ItemService.itemStats;
  $scope.itemBind = ItemService.itemBind;
  $scope.itemClass = ItemService.itemClass;
  $scope.inventoryType = ItemService.inventoryType;
  $scope.isLast = ItemService.isLast;
}]);