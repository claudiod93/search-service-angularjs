/**
 * Created by claudioantonio on 6/19/15.
 */
angular.module("consumidorModule")
    .service("consumidorService", consumidorService);

function consumidorService(){

    var listaTrabajos, listadoFavoritos=[], listadoContratados;

    listaTrabajos = [
        {
            id:1,
            titulo: "titulo 1",
            contenido: "contenido 1"
        },
        {
            id:2,
            titulo: "titulo 2",
            contenido: "contenido 2 fdgfgd"
        }
    ];

    /*return {
        getListaTrabajo: getListaTrabajo,
        setListaTrabajo: setListaTrabajo
    };*/

    this.getListaTrabajo = function() {
        return listaTrabajos;
    };

    this.setListaTrabajo = function(listado) {
        listaTrabajos = listado;
    };

    this.getListaFavoritos = function() {
        return listadoFavoritos;
    };

    this.addListaFavoritos = function(row) {
        listadoFavoritos.push(row);
    };

    this.removeListaFavoritos = function(key){
        listadoFavoritos.splice(key,1);
        console.log(listadoFavoritos);
    };

    this.getListaContratados = function() {
        return listadoContratados;
    };

    this.setListaConstratados = function(listado) {
        listadoContratados = listado;
    };
};