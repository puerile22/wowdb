app.service('ItemService', ['$http', function($http) {
  var params = {
    apiKey: 'mu3m6axygmed2jt8euvf94u8z4qvhazt',
    locale: 'en_US',
    jsonp: 'JSON_CALLBACK'
  };
  var baseUrl = 'https://us.api.battle.net/wow/item/';
  this.getItem = function(id) {
    return $http({
      method: 'jsonp',
      url: baseUrl + id,
      params: params
    })
  };
  this.getPvpUnranked = function(id) {
    return $http({
      method: 'jsonp',
      url: baseUrl + id + '/pvp-unranked',
      params: params
    })
  };
}])