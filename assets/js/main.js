/**
 * Created by Agustin on 20/10/2018.
 */
var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function ($scope, $http, $rootScope) {
    $scope.selectLng = "EN";

    $scope.loadLng = function (lng) {
        $http({
            method: 'GET',
            url: 'assets/json/' + lng + '.json'
        }).then(function (response){
            $scope.lng = response.data;
            console.log({loadlng: response, parameter: lng,status: 'OK'})
        },function (error){
            $scope.loadLng($scope.selectLng);
            console.log({loadlng: error, parameter: lng, status: 'BAD'}, 'background: #222; color: #bada55')
        });
    };
    $scope.loadLng($scope.selectLng);
});




$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


var styles = [
    'background: linear-gradient(#1e1e28, #27293d)'
    , 'border: 1px solid #3E0E02'
    , 'color: #cfd2da'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'width: 100%'
    , 'font-family: "Ubuntu", sans-serif'
].join(';');
console.log('%c Hello there! ', styles);