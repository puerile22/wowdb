app.controller("CharController", ["$scope", "CharFactory", "$location", "$route", function($scope, CharFactory, $location, $route) {
  $scope.characters = CharFactory.getCharacters();
  $scope.race = CharFactory.race;
  $scope.class = CharFactory.class;
  $scope.name = $route.current.params.keyword;
  $scope.imgBaseUrl = 'http://us.battle.net/static-render/us';
  $scope.getCharacter = function(realm, name) {
    CharFactory.singleCharacter(realm, name, {fields: 'items'});
    $location.path('/character');
  };
}]);
