 var myModule = angular.module("productdetails",['ui.router'])
               myModule.controller("productdetailsctrl",function($scope,$window,$state,$http){
                   $scope.data = {}
                   $http({
                       url:"vehicles.json",
                       method:"GET",
                      
                   })
                   .then(function(response){
                $scope.myProduct = response.data.products;
                     console.log("hai");  
                    })      
                     $scope.buy = function(){
                       $state.go("     ")
                       console.log("hai");
                       
                   }
                   $scope.back = function(){
                    $state.go("hello");
                   }
                   $scope.add = function(){
                       var count = count+1;
                       return count;
                   }
                   
               })
               .config(function($stateProvider){
                   $stateProvider
                          .state("details",{
                          url : '/details/:id',
                          templateUrl : "productDetail.html",
                          controller : "productdetailsctrl"
                          });
                   $stateProvider.state("hello",{
                       url : '/hi',
                       templateUrl : "hi.html",
                       controller : "roductdetailsctrl"
                   });
                   
                          
               })