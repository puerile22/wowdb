app.controller('HomePageController', ['$scope', 'RealmService', 'CharFactory', '$location', function($scope, RealmService, CharFactory, $location) {
  RealmService.request('realm/status').success(function(data) {
    $scope.realms = data.realms;
  });

  $scope.search = function(event) {
    if (event.which === 13) {
      $scope.clickSearch();
    }
  };

  $scope.clickSearch = function() {
    CharFactory.find($scope.realms, $scope.keyword);
    $location.path('/characters');
  }

}]);