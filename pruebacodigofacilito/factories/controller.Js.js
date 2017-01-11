/**
 * Created by ferazo on 13/12/2016.
 */
angular.module("todoList",["LocalStorageModule"])
    .factory('ListaService',function(localStorageService){
        var listaService={};
        listaService.key="angularList";
        if(localStorageService.get(listaService.key)){
            listaService.activities=localStorageService.get(listaService.key);
        }else {
            listaService.activities = [];
        }
        listaService.add=function(newActv){
            listaService.activities.push(newActv)
        };
        listaService.updateLocalStorage=function(){
            localStorageService.set(listaService.key,listaService.activities);
        };
        listaService.clean=function(){
            listaService.activities=[];
            listaService.updateLocalStorage();
        };
        listaService.getAll=function(){
            return listaService.activities;
        }
        listaService.removeItem=function(item){
            listaService.activities=listaService.activities.filter(function(activity){
               return activity!==item;
            });
            listaService.updateLocalStorage();
            return listaService.getAll();
        }

        return listaService;
    })
.controller("controller",function($scope,ListaService){
        $scope.todo=ListaService.getAll();
        $scope.newActv={};

        $scope.addActv=function(){
            ListaService.add($scope.newActv);
            $scope.newActv={};
        }
        $scope.removeActv=function(item){
            $scope.todo=ListaService.removeItem(item);
        }
        $scope.clean=function(){
            ListaService.clean();
        }

    });