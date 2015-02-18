app.controller("CharController", ["$scope", "CharService", "$location", "$route", function($scope, CharService, $location, $route) {
  $scope.characters = CharService.getCharacters();
  $scope.race = CharService.race;
  $scope.class = CharService.class;
  $scope.name = $route.current.params.keyword;
  $scope.imgBaseUrl = 'http://us.battle.net/static-render/us';
  $scope.getCharacter = function(realm, name) {
    CharService.singleCharacter(realm, name, {fields: 'items'});
    $location.path('/character');
  };
}]);
