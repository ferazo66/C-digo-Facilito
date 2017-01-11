/**
 * Created by ferazo on 14/12/2016.
 */
angular.module("CustomDirective",["ngRoute"])
.config(function($routeProvider){
        $routeProvider
            .when("/",{
            controller:"ResposController",
            templateUrl:"templates/home.html"

        })
            .when("/repo/:name",{
                controller:"RepoController",
                templateUrl:"templates/repo.html"
            })
            .otherwise("/");
    });