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

		.when("/addIssue", {
			templateUrl : "views/addIssue.html",
			controller : "addIssueController"
		})

		.when("/readme", {
			templateUrl : "views/readme.html",
			controller : "readmeController"
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
	$scope.studenten = [];

	$http.get("https://automatiseringbap.firebaseio.com/rest/studenten.json")
	.success(function(results){
		$scope.studenten = results;
		console.log(results);
	})
	.error(function(error){
		console.log(error);
	});
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

app.controller("readmeController", function($scope,$http){
	$scope.title = "Readme";
	$scope.readme = [];

	$http.get("https://api.github.com/repos/FlorianPieters/Automatiseringbab/readme")
	.success(function(results){
		console.log(results);
		$scope.readme = results;
	})
	.error(function(error){
		console.log(error);
	});
});

app.controller("addIssueController", function($scope,$http){

	this.issue = {
		title: '',
		body: ''
	};


	this.upload = function(){
		console.log("user clicked upload", this.issue);
	$http.post("https://api.github.com/repos/FlorianPieters/Automatiseringbab/issues?title={{issue.title}}&body={{issue.body}}")
	.success(function(results){
		console.log(results.status);
	})
	.error(function(error){
		console.log(error);
	});
	
	}
});