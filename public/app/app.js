var mainApp = angular.module("myApp",["ngRoute"])

mainApp.config(["$routeProvider", function($routeProvider){
	$routeProvider.when("/", {
		controller: "HomeController",
        templateUrl: "app/view/home.html"
	}).when("/characters", {
		controller: "CharactersController",
        templateUrl: "app/view/characters.html"
	}).when("/addCharacter", {
		controller: "AddCharacterController",
        templateUrl: "app/view/add-character.html"
	}).when("/detail/:name", {
		controller: "DetailController",
		templateUrl: "app/view/detail.html"
	})
}]);