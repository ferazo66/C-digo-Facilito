/**
 * Created by ferazo on 13/12/2016.
 */
angular.module("myhtml",[])
    .controller("controller",function($scope,$http){
        $scope.posts=[];
        $scope.newPost={};
        $scope.loading=true;
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .then(function(datos){
                console.log(datos.data);
                $scope.posts=datos.data;
                $scope.loading=false;
            },function(error){
                $scope.loading=false;
            });
        $scope.addPost=function(){
            $http.post("https://jsonplaceholder.typicode.com/posts",{
                title:$scope.newPost.title,
                boby:$scope.newPost.boby,
                userId:1
            })
                .then(function(data,status,headers,config){
                    $scope.posts.push($scope.newPost);
                    $scope.newPost={};

                })
                ,function(error,status,headers,config){
                console.log(error);

            };
        }
    });