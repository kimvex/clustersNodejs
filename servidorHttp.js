/*
  Creado por Benjamin De la cruz Martinez <@kimvex en github.com>
  
*/
'use strict';

const http = require('http'),
  express  = require('./express');

// Creando el servidor con http
class Servidor{
  constructor(config){
    this.config = config || {};

    this.app = new express();

    this.server = http.createServer(this.app.server);

    this.app.gets();

  }

  // Iniciando el servidor
  iniciado(){
    
    this.server.listen(3000, ()=> console.log('El servidor se esta ejecutando en el puerto 3000'));

  }
}

module.exports = Servidor;
