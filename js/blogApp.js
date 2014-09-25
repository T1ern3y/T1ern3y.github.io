app = angular.module('blogApp', []); 

app.controller('blogListCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('/posts.json').success(function (data) {
		$scope.posts = data;
	});
}]);