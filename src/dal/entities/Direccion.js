module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Direccion = sequelize.define('Direcciones', {
        id: {
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        Numero: {
            type: DataType.INTEGER,
            allowNull: false,
        },
    });

    Direccion.associate = (models) => {
        Direccion.belongsTo(models.Calles);
        Direccion.hasOne(models.Hospitales);
        Direccion.hasMany(models.Pacientes);
        Direccion.hasOne(models.Medicos);
    };

    return Direccion;
}