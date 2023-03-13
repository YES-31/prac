const CartService = require("../services/carts.service");

class CartController {
  cartService = new CartService();

  //장바구니 상품 추가하기
  addItemInCart = async (req, res) => {
    try {
      const userId = 1;
      const { itemId } = req.params;

      const addItem = await this.cartService.addItemInCart(itemId, userId);

      return res.status(200).json({
        data: addItem,
        message: "장바구니 추가 완료",
        result: true,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).JSON({ errormessage: "controller단 오류" });
    }
  };
}
