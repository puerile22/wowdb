app.controller("SingleCharController", ["$scope", "CharFactory", '$route', function($scope, CharFactory, $route) {
  $scope.itemArray = ['head', 'neck', 'shoulder', 'back', 'chest', 'shirt', 'tabard', 'wrist', 'hands', 'waist', 'legs', 'feet', 'finger1', 'finger2', 'trinket1', 'trinket2', 'mainHand', 'offHand'];
  CharFactory.singleCharacter($route.current.params, {fields: 'items'}).success(function(data) {
    $scope.character = data;
    $scope.items = $scope.itemArray;
  });
  $scope.hasItem = function(item) {
    if ($scope.character.items[item]) {
      return true;
    } else {
      return false;
    };
  };

  $scope.itemBaseUrl = 'http://us.media.blizzard.com/wow/icons/56';
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