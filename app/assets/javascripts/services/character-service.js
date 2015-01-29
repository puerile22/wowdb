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
  this.race = {
    '1': 'Human',
    '2': 'Orc',
    '3': 'Dwarf',
    '4': 'Night Elf',
    '5': 'Undead',
    '6': 'Tauren',
    '7': 'Gnome',
    '8': 'Troll',
    '9': 'Goblin',
    '10': 'Blood Elf',
    '11': 'Draenei',
    '22': 'Worgen',
    '24': 'Pandaren',
    '25': 'Pandaren',
    '26': 'Pandaren'
  };
  this.class = {
    '1': 'Warrior',
    '2': 'Paladin',
    '3': 'Hunter',
    '4': 'Rogue',
    '5': 'Priest',
    '6': 'Death Knight',
    '7': 'Shaman',
    '8': 'Mage',
    '9': 'Warlock',
    '10': 'Monk',
    '11': 'Druid'
  };
}]);