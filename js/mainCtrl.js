var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope){
	$scope.name="Jordan";
	$scope.friends=["Torin", "Jason"];
	$scope.addFriend = function(newFriendName){
		$scope.friends.push(newFriendName);
	}
})
