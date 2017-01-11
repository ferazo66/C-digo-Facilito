/**
 * Created by ferazo on 14/12/2016.
 */
angular.module("child",[])
    .run(function($rootScope){
        $rootScope.nombre=" enrique ";
    })
.controller("controller",function($scope){
        $scope.nombre=" erazo ";
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.nombre="franklin"
            });
        },1000);
    }).controller("ChildController",function($scope){

    })
    ;