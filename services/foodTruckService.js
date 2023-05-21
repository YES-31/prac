const FoodTruckRepositories = require("../repositories/foodTruckRepositories.js");

class foodTruckService {
  foodTruckRepositories = new FoodTruckRepositories();

  getTruck = async (truckId) => {
    try {
      const result = await this.foodTruckRepositories.getTruck(truckId);
      console.log("Service result: ", result);
      return result;
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .json({ errorMessge: "요청한 데이터의 형식이 올바르지 않습니다." });
    }
  };

  postTurck = async (truckId) => {
    try {
      const result = await this.foodTruckRepositories.postTruck(truckId);
      return result;
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessge: "postTruck error" });
    }
  };
}

module.exports = foodTruckService;
