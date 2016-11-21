/*
  Creado por Benjamin De la cruz Martinez <@kimvex en github.com>
  
  Creando clusters

*/
'use strict';

// Importando modulos
const http    = require('http'),
      cluster = require('cluster'),
      os      = require('os').cpus().length;

/*
 Observamos si es el cluster maestro en caso de que lo sea
 clonaremos la cantidad de cluster a la par de los nucleos 
 del procesador.
*/
if(cluster.isMaster){

  for(let i = 0; i < os; i++){
    cluster.fork();
    console.log(`El Worker numero: ${cluster.worker.id} esta vivo`);
  }

  cluster.on('exit', (worker)=>{
    console.log(`El Worker numero: ${worker.id} ha muerto`);
  });

}else{

  // Levantamos el servidor en cada cluster los cuales comparten el mismo puerto
  http.createServer((sol, res)=>{
    res.end('Hola, estamos aprovechando el poder de los clusters :)');
  }).listen(3000, ()=> console.log('El servidor se esta ejecutando en el puerto 3000'));

  console.log(`Worker numero ${cluster.worker.id} esta corriendo`);
}
