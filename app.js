angular.module("ecommerceModule",["controllerModule","ui.router"])
       .config(function($stateProvider,$urlRouterProvider) {
         $urlRouterProvider.otherwise("/products");
         $stateProvider.state("products",{
           url:"/products",
           templateUrl:"products.html"
         })
         .state("productDetails",{
           url:"/productDetails",
           templateUrl:"productDetails.html"
         })
         .state("cartDetails",{
           url:"/cartDetails",
           templateUrl:"cartDetails.html"
         })
         .state("paymentDetails",{
           url:"/paymentDetails",
           templateUrl:"paymentDetails.html"
         });
       });
