/*
  Creado por Benjamin De la cruz Martinez <@kimvex en github.com>
  
*/
'use strict';

const express = require('express');

class Server {
  constructor(config){
    this.config = config || {};
    this.server = express();
  }

  // Sirviendo las rutas get
  gets(){

    this.server.get('/', (sol, res, next)=>{
      
      res.send(`Esta ruta esta servida por los workes`);

    });

    this.server.get(`/kimvex`,(sol, res, next)=>{

      res.send('Esta ruta tambien 🙈');

    });

  }

}

module.exports = Server;
