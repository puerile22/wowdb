app.controller("SingleCharController", ["$scope", "CharFactory", '$route', 'ItemService', function($scope, CharFactory, $route, ItemService) {
  $scope.itemArray = ['head', 'neck', 'shoulder', 'back', 'chest', 'shirt', 'tabard', 'wrist', 'hands', 'waist', 'legs', 'feet', 'finger1', 'finger2', 'trinket1', 'trinket2', 'mainHand', 'offHand'];
  CharFactory.singleCharacter($route.current.params, {fields: 'items'}).success(function(data) {
    $scope.character = data;
    $scope.items = $scope.itemArray;
  });
  $scope.getItem = function(id) {
    ItemService.getItem(id).success(function(data) {
      if (data.name === undefined) {
        ItemService.getAvailableContexts(id, data.availableContexts[0]).success(function(data) {
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
  };
  $scope.resetItem = function() {
    $scope.item = {};
  };
  $scope.itemBaseUrl = 'http://us.media.blizzard.com/wow/icons/56';
  $scope.imgBaseUrl = 'http://us.battle.net/static-render/us';
  $scope.predicate = ItemService.predicate;
  $scope.races = CharFactory.race;
  $scope.classes = CharFactory.class;
  $scope.itemStats = ItemService.itemStats;
  $scope.itemBind = ItemService.itemBind;
  $scope.itemClass = ItemService.itemClass;
  $scope.inventoryType = ItemService.inventoryType;
  $scope.isLast = ItemService.isLast;
}]);