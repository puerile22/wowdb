app.controller('ItemController', ['$scope', 'ItemService', '$route', 'CharFactory', function($scope, ItemService, $route, CharFactory) {
  ItemService.getItem($route.current.params.id).success(function(data) {
    if (data.name === undefined) {
      ItemService.getAvailableContexts($route.current.params.id, data.availableContexts[0]).success(function(data) {
        $scope.item = data;
        ItemService.getItemSubClasses().success(function(data) {
          ItemService.itemHelper($scope, data);
        });
      });
    } else {
      $scope.item = data;
      ItemService.getItemSubClasses().success(function(data) {
        ItemService.itemHelper($scope, data);
      });
    };
  });
  $scope.predicate = ItemService.predicate;
  $scope.races = CharFactory.race;
  $scope.classes = CharFactory.class;
  $scope.itemStats = ItemService.itemStats;
  $scope.itemBind = ItemService.itemBind;
  $scope.itemClass = ItemService.itemClass;
  $scope.inventoryType = ItemService.inventoryType;
  $scope.isLast = ItemService.isLast;
}]);