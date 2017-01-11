/**
 * Created by ferazo on 14/12/2016.
 */
angular.module("CustomDirective")
.controller("ResposController",function($scope,$http){
        $scope.repos=[];
        $http.get("https//api.github.com/users/twitter/repos")
            .then(function(datos){
                $scope.posts=datos.data;
                for(vari=datos.data.length-1;i>=0;i--){
                    var repo=datos.data[i];
                    $scope.repos.push(repo.name);
                }
            },function(error){
            });
        $scope.optionSelected=function(datos){
            $scope.$apply(function(){
                $scope.main_repo=datos.data;
            })
        }
    })
    .controller("RepoController",function($scope,$http,$routeParams){
        $scope.repo={};
        $http.get("https//api.github.com/repos/twitter/"+$routeParams.name)
            .then(function(datos){
                $scope.posts=datos.data;
            },function(error){

            }
        );
    });