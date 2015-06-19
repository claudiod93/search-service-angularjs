/**
 * Created by claudioantonio on 6/19/15.
 */
angular.module("consumidorModule", ['ngImgCrop'])
.controller("consumidorController", function($scope, consumidorService, $filter){


        $scope.myImage='';
        $scope.myCroppedImage='';

        var handleFileSelect=function(evt) {
            var file=evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function($scope){
                    $scope.myImage=evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

        $scope.marcar = function(item){
            if($filter('filter')($scope.listadoFavoritos,item).length<1){
                consumidorService.addListaFavoritos(item);
            }

        };


        $scope.eliminar = function(index){
            consumidorService.removeListaFavoritos(index);
        };

        $scope.guardar = function(){

            consumidorService.setListaTrabajo([
                {
                    id:1,
                    titulo: "titulo 3",
                    contenido: "contenido 1"
                },
                {
                    id:2,
                    titulo: "titulo 2",
                    contenido: "contenido 2 fdgfgd"
                }
            ]);
        };

        $scope.$watch(function(){
            // Escuchar
            return consumidorService.getListaTrabajo();
        }, function(){
            $scope.listado = consumidorService.getListaTrabajo();
        });

        $scope.$watch(function(){
            // Escuchar
            return consumidorService.getListaFavoritos();
        }, function(){
            $scope.listadoFavoritos = consumidorService.getListaFavoritos();
        });


});