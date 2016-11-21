/*
  Creado por Benjamin De la cruz Martinez <@kimvex en github.com>
  
  Creando clusters y sirviendo una aplicacion que utiliza express

*/
'use strict';

//Importamos los modulos
const cluster = require('cluster'),
      os      = require('os').cpus().length,
      server  = require('./servidorHttp');

/*
 Observamos si es el cluster maestro en caso de que lo sea
 clonaremos la cantidad de cluster a la par de los nucleos 
 del procesador.
*/
if(cluster.isMaster){

  const Master = require('./work');
  const master = new Master({cluster:cluster});

  for(let i = 0; i < os; i++){
    master.levantarWorker();
  }

  cluster.on('exit', (worker)=>{
    console.log(`El cluster numero: ${worker.id} esta muerto`);
    master.levantarWorkerMuerto();
  });

}else{

  // Creando un servidor con http y express
  let app = new server();
  app.iniciado();
  console.log(`cluster ${cluster.worker.id} esta corriendo`)

}
