angular.module("AngularSportsStore", ["customFilters"])
.controller("sportsStoreCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.products = []
    $http.get('/products')
    .success(function(data){
      $scope.products = data
    })
}]);


