const BaseRepository = require("./base.repository");
const sequelize = require("./base.repository")
const { QueryTypes } = require('sequelize');

class MedicoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Medicos");
  }

  async getMedicoLibre() {
    const consulta = "SELECT dni FROM (SELECT Medicos.dni,COUNT(id) AS cont FROM Medicos LEFT OUTER JOIN (SELECT * FROM Consultas WHERE date(Consultas.createdAt) = date('now')) AS C ON Medicos.dni = C.MedicoDni GROUP BY Medicos.dni ORDER BY cont ASC LIMIT 1);"
    return await this._db.sequelize.query(consulta, {
      nest: true,
      type: QueryTypes.SELECT
    });
  }

  async obtenerMedicosHospital(CUIT) {
    return this._db.models[this.entity].findAll({ where: { HospitaleCUIT: CUIT } });
  }

  async cantidadEspecialidad(CUIT, especialidad) {
    return this._db.models[this.entity].count({ where: { especialidad: especialidad, HospitaleCUIT: CUIT } });
  }

  async obtenerHospital(dni) {
    return this._db.models[this.entity].findByPk(dni, { include: [this._db.models.Hospitales] });
  }

}

module.exports = MedicoRepository;

/*
SELECT COUNT(id)
FROM  Medicos NATURAL JOIN
      (SELECT * FROM Consultas WHERE createdAt= date('now'));

SELECT dni
FROM
(SELECT Medicos.dni,COUNT(id) as cont
FROM Medicos INNER JOIN Consultas ON Medicos.dni = Consultas.MedicoDni
WHERE date(Consultas.createdAt) = date('now')
GROUP BY Medicos.dni
ORDER BY cont ASC
LIMIT 1);



*/