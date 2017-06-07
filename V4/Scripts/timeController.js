angular.module("dateTime").
	controller("timeController", ["$scope","$http", function (scope, http) {
		var dateTime = http.get("http://time.jsontest.com/").then(function(dateResponse){
			console.log(dateResponse.data.time);
			scope.time = dateResponse.data.time;
		});
	}]);