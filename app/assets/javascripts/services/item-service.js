app.service('ItemService', ['$http', "$resource", function($http) {
  var params = {
    apiKey: 'mu3m6axygmed2jt8euvf94u8z4qvhazt',
    locale: 'en_US',
    jsonp: 'JSON_CALLBACK'
  };
  var baseUrl = 'https://us.api.battle.net/wow/item/';
  var itemSubClasses = $http({
    method: 'jsonp',
    url: 'https://us.api.battle.net/wow/data/item/classes',
    params: params
  });
  this.getItem = function(id) {
    return $http({
      method: 'jsonp',
      url: baseUrl + id,
      params: params
    })
  };
  this.getAvailableContexts = function(id, context) {
    return $http({
      method: 'jsonp',
      url: baseUrl + id + '/' + context,
      params: params
    })
  };
  this.getBonusStats = {0: "Mana", 1: "Health", 3: "Agility", 4: "Strength", 5: "Intellect", 6: "Spirit", 7: "Stamina", 12: "Defense", 13: "Dodge", 14: "Parry", 15: "Block", 16: "Hit (Melee)", 17: "Hit (Ranged)", 18: "Hit (Spell)", 19: "Critical Strike (Melee)", 20: "Critical Strike (Ranged)", 21: "Critical Strike (Spell)", 22: "Hit Avoidance (Melee)", 23: "Hit Avoidance (Ranged)", 24: "Hit Avoidance (Spell)", 25: "Critical Strike Avoidance (Melee)", 26: "Critical Strike Avoidance (Ranged)", 27: "Critical Strike Avoidance (Spell)", 28: "Haste (Melee)", 29: "Haste (Ranged)", 30: "Haste (Spell)", 31: "Hit", 32: "Critical Strike", 33: "Hit Avoidance", 34: "Critical Strike Avoidance", 35: "PvP Resilience", 36: "Haste", 37: "Expertise", 38: "Attack Power", 39: "Ranged Attack Power", 40: "Versatility", 41: "Bonus Healing", 42: "Bonus Damage", 43: "Mana Regeneration", 44: "Armor Penetration", 45: "Spell Power", 46: "Health Per 5 Sec.", 47: "Spell Penetration", 48: "Block Value", 49: "Mastery", 50: "Bonus Armor", 51: "Fire Resistance", 52: "Frost Resistance", 53: "Holy Resistance", 54: "Shadow Resistance", 55: "Nature Resistance", 56: "Arcane Resistance", 57: "PvP Power", 58: "Amplify", 59: "Multistrike", 60: "Readiness", 61: "Speed", 62: "Leech", 63: "Avoidance", 64: "Indestructible", 65: "Unused 7", 66: "Cleave", 67: "Versatility", 68: "Unused 10", 69: "Unused 11", 70: "Unused 12"};
  this.getItemSubClasses = function() {
    return itemSubClasses;
  };
  var getSellPrice = function(price) {
    var priceStr = price.toString();
    var arr = priceStr.split("").reverse();
    var sellPrice = {
      '0': 0,
      '1': 0,
      '2': 0
    };
    for(var i = 0;i < arr.length/2 || i < 3;i++) {
      if(i === 2) {
        sellPrice[2 - i] = parseInt(arr.slice(i * 2).reverse().join(''));
      } else {
        sellPrice[2 - i] = parseInt(arr.slice(i * 2,i * 2 + 2).reverse().join(''));
      }
    };
    return sellPrice;
  };
  var hasNameDescription = function(item) {
    if (item.nameDescription === "") {
      return false;
    } else {
      return true;
    };
  };
  this.predicate = function(stats) {
    if (stats.stat > 70) {
      return 2;
    } else {
      return stats.stat;
    }
  };
  this.isLast = function(i, array) {
    if(i !== array[array.length - 1]) {
      return true;
    } else {
      return false;
    }
  };
  this.itemHelper = function($scope, data) {
    $scope.itemSubClasses = data.classes;
    $scope.hasNameDescription = hasNameDescription;
    $scope.sellPrice = getSellPrice($scope.item.sellPrice);
    for(var i = 0;i < $scope.itemSubClasses.length;i++) {
      if($scope.item.itemClass == $scope.itemSubClasses[i].class) {
        $scope.itemClass = $scope.itemSubClasses[i];
        break;
      }
    };
    for(var i = 0;i < $scope.itemClass.subclasses.length;i++) {
      if($scope.item.itemSubClass == $scope.itemClass.subclasses[i].subclass) {
        $scope.itemSubClass = $scope.itemClass.subclasses[i].name;
        break;
      }
    };
  };
  this.itemBind = {
    '1': 'Binds when picked up',
    '2': 'Binds when equipped'
  };
  this.itemClass = {
    "0":"Consumable",
    "1":"Container",
    "2":"Weapon",
    "3":"Gem",
    "4":"Armor",
    "5":"Reagent",
    "6":"Projectile",
    "7":"Trade Goods",
    "8":"Generic",
    "9":"Book",
    "10":"Money",
    "11":"Quiver",
    "12":"Quest",
    "13":"Key",
    "14":"Permanent",
    "15":"Junk",
    "16":"Glyph"
  };
  this.inventoryType = {
    "0":"None",
    "1":"Head",
    "2":"Neck",
    "3":"Shoulder",
    "4":"Shirt",
    "5":"Chest",
    "6":"Waist",
    "7":"Legs",
    "8":"Feet",
    "9":"Wrist",
    "10":"Hands",
    "11":"Finger",
    "12":"Trinket",
    "13":"One-Hand",
    "14":"Shield",
    "15":"Ranged",
    "16":"Cloak",
    "17":"Two-Hand",
    "18":"Bag",
    "19":"Tabard",
    "20":"Robe",
    "21":"Main Hand",
    "22":"Off Hand",
    "23":"Held In Off-hand",
    "24":"Ammo",
    "25":"Thrown",
    "26":"Ranged",
    "28":"Relic"
  };
  this.itemStats = {
   "-1": "None",
   0: "Mana",
   1: "Health",
   3: "Agility",
   4: "Strength",
   5: "Intellect",
   6: "Spirit",
   7: "Stamina",
   12: "Defense Skill",
   13: "Dodge",
   14: "Parry",
   15: "Block",
   16: "Melee Hit",
   17: "Ranged Hit",
   18: "Spell Hit",
   19: "Melee Crit",
   20: "Ranged Crit",
   21: "Spell Crit",
   22: "Melee Hit Taken",
   23: "Ranged Hit Taken",
   24: "Spell Hit Taken",
   25: "Melee Crit Taken",
   26: "Ranged Crit Taken",
   27: "Spell Crit Taken",
   28: "Melee Haste",
   29: "Ranged Haste",
   30: "Spell Haste",
   31: "Hit",
   32: "Critical Strike",
   33: "Hit Taken",
   34: "Crit Taken",
   35: "Resilience",
   36: "Haste",
   37: "Expertise",
   38: "Attack Power",
   39: "Ranged Attack Power",
   40: "Versatility",
   41: "Spell Healing Done", // deprecated
   42: "Spell Damage Done", // deprecated
   43: "Mana Regeneration",
   44: "Armor Penetration",
   45: "Spell Power",
   46: "Health Regen",
   47: "Spell Penetration",
   48: "Block Value",
   49: "Mastery",
   50: "Bonus Armor",
   51: "Fire Resistance",
   52: "Frost Resistance",
   53: "Holy Resistance",
   54: "Shadow Resistance",
   55: "Nature Resistance",
   56: "Arcane Resistance",
   57: "PVP Power",
   58: "Amplify",
   59: "Multistrike",
   60: "Readiness",
   61: "Speed",
   62: "Leech",
   63: "Avoidence",
   64: "Indestructible",
   65: "WOD_5",
   66: "Cleave",
   71: "Strength or Agility or Intellect",
   72: "Strength or Agility",
   73: "Agility or Intellect",
   74: "Strength or Intellect"
  };
}]);