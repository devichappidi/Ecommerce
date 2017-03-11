var myapp = angular.module("payDetails", [])
    .controller("payCtrl", function ($scope, $stateParams, $state) {
        var paypal = JSON.parse($stateParams.payment);
        var totalcost = 0;

        $scope.payy = paypal;
        console.log("pay " + JSON.stringify($stateParams))
        $scope.value = "Continue";
        $scope.continue = function () {
            $scope.continuepay = !$scope.continuepay;

            if ($scope.continuepay)
                $scope.value = "Hide";
            else
                $scope.value = "Continue";
        };
        $scope.home = function () {

            $state.go("products");
        };
        $scope.back = function () {
            $state.go("cartDetails", {
                cart: $stateParams.payment
            });

        }


        $scope.cardfn = function () {
            $scope.card = !$scope.card;
        };
        $scope.debcardfn = function () {

            $scope.debcard = !$scope.debcard;
        };
        $scope.cashon = function () {
            $scope.cash = !$scope.cash;
        };
        $scope.confirm = function () {
            alert("Your order is confirmed");
        };
        $scope.confirmfn = function () {
            if (!$scope.debitcard) {
                $scope.err1 = "Enter valid card number";
            }
            if (!$scope.monthval) {
                $scope.err2 = "Enter valid expiry date";
            }
            if (!$scope.namecardval) {
                $scope.err3 = "Enter valid card name";
            } else {
                alert("Your order is confirmed");
            }
        }
        $scope.show = function () {
            if (!$scope.captchaval) {
                $scope.err = "Please enter valid captcha code";
            } else {
                alert("Your order is confirmed");
            }
        }
        $scope.totalcost = 0;
        $scope.total = function () {

            for (var i = 0; i < paypal.length; i++) {
                $scope.totalcost = $scope.totalcost + parseInt(paypal[i].cost);
                console.log("pay " + $scope.totalcost)
            }
        }
        $scope.remove = function (name, cost) {

            var index = -1;
            var arr = eval($scope.payy);
            for (var j = 0; j < arr.length; j++) {
                if (arr[j].cost == cost) {
                    index = j;
                    break;
                }
                if (index === -1) {
                    alert("error");
                }
            }
            console.log(index);
            $scope.payy.splice(index, 1);
            $scope.totalcost = $scope.totalcost - cost;

            console.log("pay " + $scope.totalcost)

        };

        $scope.total();


    });
