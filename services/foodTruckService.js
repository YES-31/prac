const FoodTruckRepositories = require("../repositories/foodTruckRepositories.js");

class foodTruckService {
  foodTruckRepositories = new FoodTruckRepositories();

  getTruck = async (truckId) => {
    try {
      const howManyTruck = await this.foodTruckRepositories.getTruck(truckId);
      return howManyTruck;
      
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .json({ errorMessge: "요청한 데이터의 형식이 올바르지 않습니다." });
    }
  };
}
