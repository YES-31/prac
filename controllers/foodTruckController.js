// const foodTruckService = require('../services/foodTruckService')

class foodTruckController {
  getTruck = async (req, res) => {
    try {
      const { truckNumber } = req.params;
      console.log(truckNumber);
    } catch (err) {
      console.log(err);
    }
  };
}
