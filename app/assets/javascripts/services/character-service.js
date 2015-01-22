app.service("CharFactory", ['$http', function($http) {
  var characters;
  this.find = function (realms, character, params) {
    characters = [];
    var baseUrl = 'https://us.api.battle.net/wow/character/';

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
        characters.push(data);
      }).error(function(data) {
      });
    };
    this.getCharacters = function() {
      return characters;
    };
  };
}]);