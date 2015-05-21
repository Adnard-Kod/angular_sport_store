angular.module("AngularSportsStore")
.constant("productListActiveClass", "btn-primary")
.controller('productListCtrl', [ '$scope', '$http', 'productListActiveClass', 'productListPageCount',function ( $scope, $filter, productListActiveClass ) {
  var selectedCategory = null;

  $scope.selectedPage = 1;
  $scope.pageSize = productListPageCount;

  $scope.selectCategory = function (newCategory) {
      selectedCategory = newCategory;
      $scope.selectedPage = 1;
  }

  $scope.selectPage = function (newPage) {
      $scope.selectedPage = newPage;
  }

  $scope.categoryFilterFn = function (product) {
      return selectedCategory == null ||
          product.category == selectedCategory;
  }
}])