module.exports = (sequelize, DataType) => {

    const modeloPrueba = {
      resultado: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          notEmpty: true
        }
      },
      fecha: {
        type: DataType.DATE,
        allowNull: false,
        defaultValue: new Date(),
        validate: {
          notEmpty: true
        }
      },
      fechaResultado: {
        type: DataType.DATE,
      }
    }

    //TABLA
    const Prueba = sequelize.define('Pruebas', modeloPrueba);

    //RELACION
    /*
    Users.associate = (models) => {
      Prueba.hasOne(models.Caso);
    };*/
  
    return Prueba;
  
  };

  //https://sequelize.org/master/manual/model-basics.html#data-types
