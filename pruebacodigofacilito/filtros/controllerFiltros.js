/**
 * Created by ferazo on 13/12/2016.
 */
angular.module("miModulo",[])
    .filter("removeHtml",function(){
        return function(text) {
            return String(text).replace(/<[^>]+>/gm, '');
        }
    })
    .controller("controlFiltros",function($scope){
        $scope.mi_html="<p>Hola mundo</p>"
        });