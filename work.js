/*
  Creado por Benjamin De la cruz Martinez <@kimvex en github.com>
  
*/
'use strict';

// Clase para levantar los workers del cluster
class Master {
  constructor(config){

    this.config = config || {};
    this.cluster = this.config.cluster;

  }

  // Levanta un nuevo Worker
  levantarWorker(){

    let worker = this.cluster.fork();
    console.log(`El worker ${worker.id} esta iniciado`);

  }

  // Levanta un worker cuando uno muere en caso de errores
  levantarWorkerMuerto(){
    let worker = this;

    setTimeout(()=>{
      worker.levantarWorker();
    }, 200);

  }
}

module.exports = Master;
