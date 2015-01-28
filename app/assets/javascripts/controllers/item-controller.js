app.controller('ItemController', ['$scope', 'ItemService', '$route', function($scope, ItemService, $route) {
  ItemService.getItem($route.current.params.id).success(function(data) {
    if (data.availableContexts[0] === 'pvp-unranked') {
      ItemService.getPvpUnranked($route.current.params.id).success(function(data) {
        $scope.item = data;
      });
    } else {
      $scope.item = data;
    };
  });

}]);