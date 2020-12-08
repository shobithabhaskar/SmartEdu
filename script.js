angular.module('angular_filter', [])
.controller('filter_controller', ['$scope', function($scope) {
  var members = [
  
{id:'104',name:'Python',availability:'NO',validity:new Date("November 10,2020").toISOString().slice(0, 10),mobile:781166999},
{id:'102',name:'c',availability:'YES',validity:new Date("November 11,2025").toISOString().slice(0, 10),mobile:785412664},
{id:'101',name:'hed',availability:'yes',validity:new Date("July 21,2025").toISOString().slice(0, 10),mobile:7891492201},
{id:'103',name:'javascript',availability:'yes',validity:new Date("July 27,2025").toISOString().slice(0, 10),mobile:781588996},

];

  $scope.propertyName = 'availability';
  $scope.reverse = true;
  $scope.members = members;
  $scope.rowlimit=5;

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
     };
}]);