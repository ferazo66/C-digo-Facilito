/**
 * Created by ferazo on 13/12/2016.
 */
angular.module("todoList",["LocalStorageModule"])
.controller("controller",function($scope,localStorageService){
      if(localStorageService.get("angularList")){
          $scope.todo=localStorageService.get("angularList");
      }else{
          $scope.todo=[];
      }
        /*
        {
        actividad:'terminar el curso'
        fecha :'3-03-15'
        }

         */
        $scope.$watchCollection('todo',function(newValue,oldValue){
            localStorageService.set("angularList",$scope.todo);
        });
        $scope.addActv=function(){
            $scope.todo.push($scope.newActv);
            $scope.newActv={};
            localStorageService.set("angularList",$scope.todo);
        }
        $scope.clean=function(){
            $scope.todo=[];
            localStorageService.set("angularList",$scope.todo);
        }
    });