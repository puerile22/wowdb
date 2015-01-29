app.controller('ItemController', ['$scope', 'ItemService', '$route', function($scope, ItemService, $route) {
  ItemService.getItem($route.current.params.id).success(function(data) {
    if (data.name === undefined) {
      ItemService.getAvailableContexts($route.current.params.id, $route.current.params.context).success(function(data) {
        $scope.item = data;
      });
    } else {
      $scope.item = data;
    };
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
  });
  $scope.itemStats = ItemService.itemStats;
  $scope.itemBind = ItemService.itemBind;
  $scope.itemClass = ItemService.itemClass;
  $scope.inventoryType = ItemService.inventoryType;
}]);