angular.module("helloWorld",[]).
//This is kind of setter of the helloWorld module. You pass the module name and external modules to load. We don't load any modules here though. If you want to refer to this module, just type angular.module("helloWorld") - without brackets.
	controller("helloWorldController", ["$scope", function (scope) {
		scope.helloWorld = "Hello World!";
	}]);
