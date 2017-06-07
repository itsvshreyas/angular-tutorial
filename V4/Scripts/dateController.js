angular.module("dateTime").
	controller("dateController", ["$scope","$http", function (scope, http) {
		var dateTime = http.get("http://date.jsontest.com/").then(function(dateResponse){
			console.log(dateResponse.data.date);
			scope.date = dateResponse.data.date;
		});
	}]);