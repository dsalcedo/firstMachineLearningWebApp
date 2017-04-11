var myApp = angular.module('myApp', []);

function mainCtrl($scope, $http) {
    $scope.displayModelEquation = false;


    $scope.userData = [];
    $scope.predictedData = [];
    console.log($scope.userData);

    $scope.retrieveModel = function () {
        $http.post('/regressionModel/', $scope.userData).then(function (response) {
            console.log(response.data);
            $scope.model = response.data;
            $scope.displayModelEquation = true;
        });
    };

    $scope.addNewPair = function () {
        console.log($scope.userData);
        $scope.userData.push($scope.newPair);
        $scope.newPair = {};
    }

    $scope.predict = function () {
        console.log('Prediction called!');
        $scope.predictedPair.y = ($scope.model.slope * $scope.predictedPair.x) + $scope.model.intercept;
        console.log($scope.predictedPair);
        $scope.predictedData.push($scope.predictedPair);
        $scope.predictedPair = {};
    };
};

myApp.controller('mainCtrl', mainCtrl);