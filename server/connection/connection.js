import { Sequelize } from 'sequelize';
//mySql
// const db = new Sequelize('node', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     // logging: false
// });

//POSTGRESQL
const db = new Sequelize('Node', 'postgres', 'post', {
    host: 'localhost',
    dialect: 'postgres'
    // logging: false
});

export default db;