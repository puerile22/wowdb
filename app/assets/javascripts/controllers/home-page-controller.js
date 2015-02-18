app.controller('HomePageController', ['$scope', 'RealmService', 'CharService', '$location', function($scope, RealmService, CharService, $location) {
  RealmService.request('realm/status').success(function(data) {
    $scope.realms = data.realms;
  });

  $scope.search = function(event) {
    if (event.which === 13) {
      $scope.clickSearch();
    }
  };

  $scope.clickSearch = function() {
    CharService.find($scope.realms, $scope.keyword);
    $location.path('/characters' + '/' + $scope.keyword);
  }

}]);