var app = angular.module('app', []);

  app.factory('listofplaces', function($q, $timeout) {
  
    var getplaces = function() {
      var deferred = $q.defer();
  
      $timeout(function() {
        deferred.resolve(['mumbai', 'bangalore','chennai','pune','delhi','hydrabad']);
      }, 2000);
  
      return deferred.promise;
    };
    
    return {
      getplaces : getplaces
    };
  
  });
  
  app.controller('places', function($scope, listofplaces) {
  
    $scope.places = listofplaces.getplaces();
  
  });