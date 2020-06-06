const { Router } = require("express");


module.exports = ( { RecursoController } ) => {
    const router = Router();
    
    /**
     * @swagger
     * /recurso:
     *  get:
     *      description: MINISTERIO - Usar para obtener todos los recursos de todos hospitales
     *      tags: ["MINISTERIO"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente todos los recursos de todos hospitales
     *          '412':
     *              description: Error
     */
    router.get('/', RecursoController.getRecursos.bind(RecursoController));

    /**
     * @swagger
     * /recurso:
     *  post:
     *      description: Usar para crear un recurso
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente todos los recursos de todos hospitales
     *          '412':
     *              description: Error
     */
    router.post("/", RecursoController.createRecurso.bind(RecursoController));

    //router.get("/ministerio", RecursoController.obtenerTodosRecursos.bind(RecursoController));

    /**
     * @swagger
     * /recurso/{CUIT}/{id}:
     *  put:
     *      description: Usar para modificar un recurso de un hospital
     *      tags: ["HOSPITALES"]
     *      parameters:
     *        - in: path
     *          name: CUIT
     *          description: CUIT del Hospital
     *          required: true
     *          schema:
     *              type: integer
     *              example: 2121 
     *        - in: path
     *          name: id
     *          description: id del Recurso
     *          required: true
     *          schema:
     *              type: integer
     *              example:  4
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente todos los recursos de todos hospitales
     *          '412':
     *              description: Error
     */
    router.put("/:CUIT/:id", RecursoController.updateRecurso.bind(RecursoController));

    /**
     * @swagger
     * /recurso/{CUIT}:
     *  get:
     *      description: Usar para obtener todos los recursos de un hospital
     *      tags: ["MINISTERIO"]
     *      parameters:
     *        - in: path
     *          name: CUIT
     *          required: true
     *          schema:
     *              type: integer
     *              example: 2121 
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente todos los recursos de un hospital
     *          '412':
     *              description: Error
     */
    router.get("/:CUIT", RecursoController.obtenerTodosRecursosHospital.bind(RecursoController));

    /**
     * @swagger
     * /recurso/pedirRecursos:
     *  post:
     *      description: Usar para crear un recurso
     *      tags: ["HOSPITALES"]
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente todos los recursos de todos hospitales
     *          '412':
     *              description: Error
     */
    router.post("/pedirRecursos", RecursoController.pedirRecursos.bind(RecursoController));

    return router;
}
