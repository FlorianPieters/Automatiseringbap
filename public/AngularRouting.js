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

		.when("/issues", {
			templateUrl :"views/issues.html",
			controller : "issuesController"
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
	$scope.message = [];

var init = function(){

	console.log("init");
	$http.get("https://api.github.com/repos/FlorianPieters/Automatiseringbab/commits")
	.success(function(results){
		$scope.commits = results;
		for(var i=0; i < $scope.commits.length; i++){
			var current = $scope.commits[i].commit.message;
			if($scope.message.indexOf(current)<0){
				$scope.message.push(current);
			}
		}
		console.log(results);
		console.log($scope.message);
	})
	.error(function(error){
		console.log(error);
	})
}

	init();
	
});

app.controller("issuesController", function($scope,$http){
	$scope.title ="Issues";
	$scope.issues = [];

	$http.get("https://api.github.com/repos/FlorianPieters/Automatiseringbab/issues")
	.success(function(results){
		$scope.issues = results;
		console.log(results);
	})
	.error(function(error){
		console.log(error);
	});
});

