// const foodTruckService = require('../services/foodTruckService')

class foodTruckController {
  getTruck = async (req, res) => {
    try {
      const { truckNumber } = req.params;
      console.log(truckNumber);
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .json({ errorMessge: "요청한 데이터의 형식이 올바르지 않습니다." });
    }
  };
}

module.exports = foodTruckController;
