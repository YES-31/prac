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
    try {
      //   let answer = connection.query(
      //     `SELECT * FROM testb where id=${truckId}`,
      //     function (error, results, fields) {
      //       if (error) throw error;
      //       console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP", results);
      //       return results;
      //     }
      //   );

      const answer = connection.query(
        "SELECT * FROM testb",
        function (error, results, fields) {
          if (error) throw error;
          console.log(
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP: ",
            results
          );
        }
      );

      // connection.end();
      return answer;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = foodTruckRepositories;
