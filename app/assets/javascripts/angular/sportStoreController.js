angular.module("AngularSportsStore", ["customFilters"])
.constant("productListActiveClass", "btn-primary")
.controller("sportsStoreCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.products = []
    $http.get('/products')
    .success(function(data){
      $scope.products = data
    })
}]);

angular.module("AngularSportsStore")
.controller('productListCtrl', function ($scope, $filter, productListActiveClass) {

  var selectedCategory = null;

  $scope.selectCategory = function(newCategory){
    selectedCategory = newCategory;
  }
  $scope.categoryFilterFn = function (product) {
      return selectedCategory == null ||
          product.category == selectedCategory;
  }
  $scope.getCategoryClass = function (category) {
    return selectedCategory == category ? productListActiveClass : "";
  }
})
