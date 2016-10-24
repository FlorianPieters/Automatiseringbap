var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider

		.when("/login", {
			templateUrl : "views/login.html",
			controller : "loginController"
		})

		.when("/overzicht", {
			templateUrl : "views/overzicht.html",
			controller : "overzichtController"
		})

		.when("/info", {
			templateUrl : "views/info.html",
			controller : "infoController"
		})

		.when("/commits", {
			templateUrl : "views/commits.html",
			controller : "commitController"
		})

		.when("/repo", {
			templateUrl :"views/repo.html",
			controller : "repoController"
		});

});

app.controller("loginController", function($scope,$http){
	$scope.title ="Home";
});

app.controller("overzichtController", function($scope,$http){
	$scope.title ="overzicht";
});

app.controller("infoController", function($scope,$http){
	$scope.title ="info";
});

app.controller("repoController", function($scope,$http){
	$scope.title ="Repo";
});

app.controller("commitController", function($scope,$http){
	$scope.title ="Commits";
	$scope.commits = [];

var init = function(){

	console.log("init");
	$http.get("https://api.github.com/repos/FlorianPieters/Automatiseringbab/commits")
	.success(function(results){
		$scope.commits = results[0].author.login;
		console.log(results);
	})
	.error(function(error){
		console.log(error);
	})
}

	init();
	
});

