app.service('RealmService', ['$http', function($http) {
  this.request = function (path, params) {
    var baseUrl = 'https://us.api.battle.net/wow/';

    params = params || {};

    params = angular.extend(params, {
      apiKey: 'mu3m6axygmed2jt8euvf94u8z4qvhazt',
      locale: 'en_US',
      jsonp: 'JSON_CALLBACK'
    });

    if (/character/.test(path)) {
      delete params.callback;
    }

    return $http({
      method: 'jsonp',
      url: baseUrl + path,
      params: params
    })
  };
}]);