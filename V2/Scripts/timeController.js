angular.module("dateTime",[]).//This is kind of setter of the helloWorld module. You pass the module name and external modules to load. We don't load any modules here though. If you want to refer to this module, just type angular.module("helloWorld") - without brackets.
	controller("timeController", ["$scope","$http", function (scope, http) {
		var dateTime = http.get("http://time.jsontest.com/").then(function(dateResponse){
			console.log(dateResponse.data.time);
			scope.time = dateResponse.data.time;
		});
	}]);