app.controller("SingleCharController", ["$scope", "CharFactory", '$route', function($scope, CharFactory, $route) {
  CharFactory.singleCharacter($route.current.params, {fields: 'items'}).success(function(data) {
    $scope.character = data;
  });
  $scope.imgBaseUrl = 'http://us.battle.net/static-render/us';
  $scope.race = {
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
  }
  $scope.class = {
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
  }
}]);