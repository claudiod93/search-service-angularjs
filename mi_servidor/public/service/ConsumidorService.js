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
            titulo: "Juan Fuentes",
            profesion: "Gásfiter",
            contenido: "Gásfiter con mucha experiencia en drifería y figas de agua",
            imagen: "img/gasfiter.jpg",
            like: "32",
            dontlike: "11"
        },
        {
            id:2,
            titulo: "Danitza zamora",
            profesion: "Enferma",
            contenido: "Enferma a domicilio con disponibilidad en las tardes, solo sector oriente",
            imagen: "img/enfermera.jpg",
            like: "23",
            dontlike: "20"
        },
        {
            id:3,
            titulo: "Hector Pinto",
            profesion: "Mecanico",
            contenido: "Mecanico especializado en trabajos electricos sobre el vehiculo",
            imagen: "img/mecanico.jpg",
            like: "89",
            dontlike: "54"
        },
        {
            id:4,
            titulo: "Diego Maradona",
            profesion: "Futolista",
            contenido: "Clases de fubtol, solo para argentinos che",
            imagen: "img/dmaradona.jpg",
            like: "11",
            dontlike: "12"
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