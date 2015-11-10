console.log	('hello')
var app = angular.module('TodoApp',[])

app.controller("TodoCtrl",function($scope,$rootScope){
	$scope.title="Welcome to our Todo App";
	$rootScope.hello='I am everywhere';

	$scope.todos=[
	{name:"mow the lawn"},
	{name: "do the dishes"},
	{name:"take a nap"},
	{name:"go to the store"}

	];





})

app.controller("PastaCtrl", function($scope){

	$scope.pasta="I love carbs";
	$scope.foods="";
})