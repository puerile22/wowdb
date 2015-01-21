app.controller("CharController", ["$scope", "CharFactory", function($scope, CharFactory) {
  $scope.characters = CharFactory.getCharacters();
}]);
