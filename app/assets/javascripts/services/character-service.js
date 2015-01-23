app.service("CharFactory", ['$http', function($http) {
  var characters;
  var baseUrl = 'https://us.api.battle.net/wow/character/';
  this.find = function (realms, character, params) {
    characters = [];

    params = params || {};

    params = angular.extend(params, {
      apikey: 'mu3m6axygmed2jt8euvf94u8z4qvhazt',
      jsonp: 'JSON_CALLBACK'
    });

    for(var i = 0;i < realms.length;i++) {
      $http({
        method:'jsonp',
        url: baseUrl + realms[i].slug + '/' + character,
        params: params
      }).success(function(data) {
        if (data.name !== undefined) {
          characters.push(data);
        }
      }).error(function(data) {
      });
    };
  };
  this.getCharacters = function() {
    return characters;
  };
  this.singleCharacter = function(info, params) {
    params = params || {};

    params = angular.extend(params, {
      apikey: 'mu3m6axygmed2jt8euvf94u8z4qvhazt',
      jsonp: 'JSON_CALLBACK'
    });
    return $http({
      method: 'jsonp',
      url: baseUrl + info.realm + '/' + info.character,
      params: params
    });
  };
}]);