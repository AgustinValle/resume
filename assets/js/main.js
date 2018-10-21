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
            setTimeout(function(){ $scope.skills() }, 500);

            console.log({loadlng: response, parameter: lng,status: 'OK'})
        },function (error){
            $scope.loadLng($scope.selectLng);
            console.log({loadlng: error, parameter: lng, status: 'BAD'})
        });
    };
    $scope.loadLng($scope.selectLng);
    $scope.skills = function () {
        var i = 0;
        for(skill in $scope.lng.skills){
            var js = document.getElementById($scope.lng.skills[skill].name);
            function oddOrEven(x) {
                return ( x & 1 ) ? "odd" : "even";
            }
            var gradientComplete
            if(oddOrEven(i) == "odd"){
                gradientComplete = js.getContext('2d').createLinearGradient(0, 0, 0, 150);
                gradientComplete.addColorStop(0, '#FF55B8');
                gradientComplete.addColorStop(1, '#FF8787');
            }
            else{
                gradientComplete = js.getContext('2d').createLinearGradient(0, 0, 0, 150);
                gradientComplete.addColorStop(0, '#5555FF');
                gradientComplete.addColorStop(1, '#9787FF');
            }
            var gradientGrey = js.getContext('2d').createLinearGradient(0, 0, 0, 150);
            gradientGrey.addColorStop(0, '#888888');
            gradientGrey.addColorStop(1, '#AAAAAA');

            window.arcSpacing = 0.15;
            window.segmentHovered = false;
            Chart.elements.Arc.prototype.draw = function() {
                var ctx = this._chart.ctx;
                var vm = this._view;
                var sA = vm.startAngle;
                var eA = vm.endAngle;

                ctx.beginPath();
                ctx.arc(vm.x, vm.y, vm.outerRadius, sA + window.arcSpacing, eA - window.arcSpacing);
                ctx.strokeStyle = vm.backgroundColor;
                ctx.lineWidth = vm.borderWidth;
                ctx.lineCap = 'round';
                ctx.stroke();
                ctx.closePath();
            };
            var config = {
                type: 'doughnut',
                data: {
                    datasets: [
                        {
                            data: [$scope.lng.skills[skill].percentage, ($scope.lng.skills[skill].percentage - 100)],
                            backgroundColor: [
                                gradientGrey,
                                gradientComplete
                            ]
                        }
                    ]
                },
                options: {
                    cutoutPercentage: 100,
                    elements: {
                        arc: {
                            borderWidth: 10
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            };
            window.chart = new Chart(js, config);
            i++
        }
    };
});






$(document).ready(function() {


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
});


