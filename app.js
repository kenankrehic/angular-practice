var app = angular.module('myApp',[]);

app.controller('mainController',function($scope,$log,movieDB){
	$scope.allMovies = movieDB;
	$scope.classType="";


})
