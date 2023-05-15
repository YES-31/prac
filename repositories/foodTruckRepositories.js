const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
connection.connect();
class foodTruckRepositories {
  getTruck = async (truckId) => {
    connection.query("SELECT * FROM testb", function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    });

    connection.end();
  };
}

module.exports = foodTruckRepositories;
