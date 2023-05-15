const FoodTruckService = require("../services/foodTruckService.js");
const foodTruckService = new FoodTruckService();

class foodTruckController {
  getTruck = async (req, res) => {
    try {
      const { truckId } = req.params;

      const result = await foodTruckService.getTruck(truckId);
      res.status(200).json({ msg: "test" });
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .json({ errorMessge: "요청한 데이터의 형식이 올바르지 않습니다." });
    }
  };
}

module.exports = foodTruckController;
