angular.module("controllerModule",[])
       .controller("productsController",function($scope,$http) {
        $http.get("vehicles.json")
             .this(function(response) {
               console.log("hii");
               $scope.products1 = response.products;
             });
       });
