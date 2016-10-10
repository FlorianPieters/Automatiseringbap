var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider

		.when("/home"), {
			templateUrl : "views/home.html",
			controller : "homeController"
		})

		.when("/repos"), {
			templateUrl :"views/repos.html",
			controller : "repoController"
		});

});

app.controller("homeController", function($scope,$http){
	$scope.title ="Home";
});

app.controller("repoController", function($scope,$http){
	$scope.title ="Repo's";
});