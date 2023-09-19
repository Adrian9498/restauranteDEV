import {Sequelize} from 'sequelize';

const conexion = new Sequelize(
    'railway', //Nombre de la base
    'postgres', //Usuario
    'JlgjM9rX0yVPPAZVNMwU', // Password

    {
        host: 'containers-us-west-78.railway.app',
        dialect: 'postgres',
        port: 7071
    }
);

export default conexion;