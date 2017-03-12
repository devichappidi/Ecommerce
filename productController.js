angular.module("products", [])
    .controller("productsController", function ($scope, $http, $state) {
        $scope.products1 = [];
        $scope.curPage = 0;
        $scope.pageSize = 9;
        $http.get("vehicles.json")
            .then(function (response) {
                /*console.log("hii" + JSON.stringify(response));*/
                $scope.products1 = response.data.products;
                console.log("hi" + $scope.products1);
                $scope.noOfPages();
            });
        $scope.noOfPages = function () {
            // console.log(x);
            console.log("hi" + $scope.products1);
            return Math.ceil($scope.products1.length / $scope.pageSize);
        }
        $scope.proDetails = function (id) {
            console.log("id" + JSON.stringify(id));
            $state.go("productDetails", {
                details: JSON.stringify(id)
            });
        }
    })
    .filter("pagination", function () {
        return function (input, start) {
            console.log("hi" + input);
            console.log("hi" + start);
            start = +start;
            console.log("hi" + start);
            return input.slice(start);
        };
    });
