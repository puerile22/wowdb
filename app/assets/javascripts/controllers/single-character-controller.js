app.controller("SingleCharController", ["$scope", "CharFactory", '$route', function($scope, CharFactory, $route) {
  $scope.itemArray = ['head', 'neck', 'shoulder', 'back', 'chest', 'shirt', 'tabard', 'wrist', 'hands', 'waist', 'legs', 'feet', 'finger1', 'finger2', 'trinket1', 'trinket2', 'mainHand', 'offHand'];
  CharFactory.singleCharacter($route.current.params, {fields: 'items'}).success(function(data) {
    $scope.character = data;
    $scope.items = $scope.itemArray;
  });
  $scope.hasItem = function(item) {
    if ($scope.character.items[item]) {
      return true;
    } else {
      return false;
    };
  };

  $scope.itemBaseUrl = 'http://us.media.blizzard.com/wow/icons/56';
  $scope.imgBaseUrl = 'http://us.battle.net/static-render/us';
  $scope.race = CharFactory.race;
  $scope.class = CharFactory.class;
}]);