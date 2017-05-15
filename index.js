angular.module('mainApp',['ngRoute'])
// 配置路由
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl: 'views/main.html'})
    .when('/scopemanagement',{templateUrl: 'views/scopemanagement.html'})
    .when('/scope',{templateUrl: 'views/scope.html'})
    .otherwise({redirectTo:'/'});
}])
// 主页面controller
.controller('homeCtrl', function($scope, $http) {

	// 用于分页，每页显示的个数
	$scope.workdatalength = 5; 
	$scope.taskdatalength = 5;
	$scope.newsdatalength = 3;

	$scope.requireselect = '';
	// 获取本地json数据，用于绑定table
	$http({
		method: 'GET',
		url: './datasource/tabledata.json'
	}).then(function successCallback(response) {
			// 处理获取到的数据
			console.log(response);
			// 保留源数据，为后续处理分页使用
			$scope.workdatasource = response.data.data.projecttask;
			$scope.taskdatasource = response.data.data.projecttask;
			$scope.newsdatasource = response.data.data.newsandnotice;

			// 获取初始值，根据每页显示个数的不同获取数据
			$scope.workdata = $scope.workdatasource.slice(0, $scope.workdatalength);  
			$scope.taskdata = $scope.workdatasource.slice(0, $scope.taskdatalength);
			$scope.newsdata = $scope.newsdatasource.slice(0, $scope.newsdatalength);


		}, function errorCallback(response) {
			// 请求失败执行代码
			console.log(response);
	});

	// 点击下一页的次数，用于计算当前应该显示第几页的数据
	// 利用a的classname和table绑定的model重名来判断不同table的点击事件，从而处理对应table的数据，避免相互影响
	$clicknextnum = 0; 
	$scope.nextPage = function (event) {
		var dataModel = $scope[event.currentTarget.className],
			dataSource = $scope[event.currentTarget.className + 'source'],
			displayLength = $scope[event.currentTarget.className + 'length'];

		$clicknextnum++;
		if (!dataSource[displayLength*$clicknextnum]) {
			// 点击下一页时，如果下一页没有数据，点击次数减一，然后return
			$clicknextnum--;
			return;
		}
		$scope[event.currentTarget.className] = dataSource.slice(displayLength*$clicknextnum, displayLength*($clicknextnum + 1));
	}
	$scope.prevPage = function (event) {
		var dataModel = $scope[event.currentTarget.className],
			dataSource = $scope[event.currentTarget.className + 'source'],
			displayLength = $scope[event.currentTarget.className + 'length'];

		if ($clicknextnum === 0)
			return;
		else {
			$clicknextnum--;
			$scope[event.currentTarget.className] = dataSource.slice(displayLength*$clicknextnum, displayLength*($clicknextnum + 1));
		}
	}
});