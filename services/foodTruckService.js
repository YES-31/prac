const FoodTruckRepositories = require("../repositories/foodTruckRepositories.js");

class foodTruckService {
  foodTruckRepositories = new FoodTruckRepositories();

  getTruck = async (truckId) => {
    try {
      const result = await this.foodTruckRepositories.getTruck(truckId);
      console.log("Service asdfasdfasdfasdfasdf", result);
      return result;
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .json({ errorMessge: "요청한 데이터의 형식이 올바르지 않습니다." });
    }
  };
}

module.exports = foodTruckService;
