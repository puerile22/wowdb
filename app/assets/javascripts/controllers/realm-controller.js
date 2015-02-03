app.controller('RealmController', ['$scope', 'RealmService', function($scope, RealmService) {
  RealmService.request('realm/status').success(function(data) {
    $scope.realms = data.realms;
  });
  $scope.reverse = false;
  $scope.order = 'name';
  $scope.locale = RealmService.locale;
}]);