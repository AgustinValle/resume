/**
 * Created by Agustin on 20/10/2018.
 */
var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function ($scope, $http, $rootScope) {
    $scope.selectLng = "EN";
    $scope.portfolioFilter = "All";

    $scope.loadLng = function (lng) {
        $http({
            method: 'GET',
            url: 'assets/json/' + lng + '.json'
        }).then(function (response){
            $scope.lng = response.data;
            console.log({loadlng: response, parameter: lng,status: 'OK'});
            $scope.getPortfolio();
            $scope.lng.head.info.years = $scope.birthday();
        },function (error){
            $scope.loadLng($scope.selectLng);
            console.log({loadlng: error, parameter: lng, status: 'BAD'})
        });
    };
    $scope.getPortfolio = function () {
       /* var icon = document.getElementById('portfolio-btn-icon');
        var btn = document.getElementById('portfolio-btn');
        icon.classList.remove("fa-plus-circle");
        icon.classList.add("fa-spinner fa-spin");
        btn.classList.add("portfolio-btn-loading");*/
        if(!$scope.portfolio){
            $scope.portfolio = [];
        }
       // setTimeout(function(){
            for(var i=0;i<3;i++){
                $scope.portfolio.push($scope.lng.portfolio.works[$scope.portfolio.length])
            }
       //     }, 900);

      /*  icon.classList.add("fa-plus-circle");
        icon.classList.remove("fa-spinner fa-spin");
        btn.classList.remove("portfolio-btn-loading");*/
    };

    $scope.changeFilter = function (e) {
        $scope.portfolioFilter = e;
    };
    $scope.loadLng($scope.selectLng);


    $scope.mail = function () {
        $http({
            method: 'POST',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSd2s7RE-6FjsYji65bQeTE_grq2N2pdyT74eQ-cWa5orywz_A/viewform?usp=pp_url&entry.16199284='+$scope.contact.item.mail+'&entry.503416706='+$scope.contact.item.name+'&entry.2069927019='+$scope.contact.item.phone+'&entry.155775088='+$scope.contact.item.message+'&submit=Submit',
            /*params: {
             https://docs.google.com/forms/d/e/1FAIpQLSd2s7RE-6FjsYji65bQeTE_grq2N2pdyT74eQ-cWa5orywz_A/viewform?usp=pp_url&entry.16199284=Email&entry.503416706=Name&entry.2069927019=Phone&entry.155775088=Message
                name: $scope.contact.item.name,
                mail: $scope.contact.item.mail,
                phone: $scope.contact.item.phone,
                message: $scope.contact.item.message
            }*/
        }).then(function (response){
            console.log("🙌🙌🙌");
            console.log(response);
        });
    };

    $scope.birthday = function () {
        var diff_ms = Date.now() - new Date($scope.lng.head.info.age);
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
});



$(document).ready(function() {

function removeElement(id) {
  var elem = document.getElementById(id);
  return elem.parentNode.removeChild(elem);
}
   /* $.scrollify({
        section : "section"
    });*/
removeElement('loading');
    $(document).keypress(function(e) {
        if (e.which === 119 ) {
           alert("A")
        }
    });
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


