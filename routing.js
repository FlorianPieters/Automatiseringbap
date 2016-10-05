var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider

		.when("/home"), {
			templateUrl : "views/home.html",
			controller : "homeController"
		});

});

app.controller("homeController", function($scope,$http){
	$scope.title ="Home";
});