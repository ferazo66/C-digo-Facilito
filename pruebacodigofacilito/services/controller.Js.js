/**
 * Created by ferazo on 13/12/2016.
 */
angular.module("todoList",["LocalStorageModule"])
    .service('ListaService',function(localStorageService){
        this.key="angularList";
        if(localStorageService.get(this.key)){
            this.activities=localStorageService.get(this.key);
        }else {
            this.activities = [];
        }
        this.add=function(newActv){
            this.activities.push(newActv)
        };
        this.updateLocalStorage=function(){
            localStorageService.set(this.key,this.activities);
        };
        this.clean=function(){
            this.activities=[];
            this.updateLocalStorage();
        };
        this.getAll=function(){
            return this.activities;
        }
        this.removeItem=function(item){
            this.activities=this.activities.filter(function(activity){
               return activity!==item;
            });
            this.updateLocalStorage();
            return this.getAll();
        }
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