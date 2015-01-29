app.controller("CharController", ["$scope", "CharFactory", "$location", function($scope, CharFactory, $location) {
  $scope.characters = CharFactory.getCharacters();
  $scope.race = CharFactory.race;
  $scope.class = CharFactory.class;
  $scope.imgBaseUrl = 'http://us.battle.net/static-render/us';
  $scope.getCharacter = function(realm, name) {
    CharFactory.singleCharacter(realm, name, {fields: 'items'});
    $location.path('/character');
  };
}]);
