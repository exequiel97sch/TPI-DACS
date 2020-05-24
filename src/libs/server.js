const express = require("express");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

class Server {
  constructor({ config, router }) {
    this._config = config;
    this._express = express();
    this._express.use(express.json());
    this._express.use(router);

    
    const swaggerOptions = {
      swaggerDefinition: {
        info: {
          title: "API Centros Hospitalarios",
          description: "Una API",
          contact: {
            name: "Grupo 3"
          },
          servers: ["http://localhost:"+this._config.PORT]
        }
      },
      apis: ["src/presentation/routes/*.js"]
    };
    
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    this._express.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

    // Devolver todos los errores como json
    const jsonErrorHandler = async (err, req, res, next) => {
      res.status(500).send({ msg: err.type });
    }
    this._express.use(jsonErrorHandler);

  }

  start() {
    return new Promise((resolve, reject) => {
      const http = this._express.listen(this._config.PORT, () => {
        const { port } = http.address();
        console.log("Application running on port " + port);
        resolve();
      });
    });
  }
}

module.exports = Server;