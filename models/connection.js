let Sequelize = require('sequelize');
let DBUsername = process.env.DBUsername || "root";
let DBpassword = process.env.DBpassword || "root";
let DBhost = process.env.DBhost || "localhost";
let DBName= process.env.DBName || "easykashtaskdb";

const connection = new Sequelize(DBName, DBUsername, DBpassword, {
  logging: false,
  host: DBhost ,
  dialect: 'mysql',
  dialectOptions: {
    flags: '-FOUND_ROWS'
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
connection
  .authenticate()
  .then(()=> {
    console.log('DB Connection has been established successfully...');
  })
  .catch((error)=> {
    console.log('Unable to connect to the database:', error);
  });

module.exports = connection;
