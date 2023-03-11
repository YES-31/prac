const CartService = require("../services/carts.service");

class CartController {
  cartService = new CartService();

  //장바구니 상품 추가하기
  addItemInCart = async (req, res) => {
    try {


    } catch (err) {
        console.log(err);
        return res.status(400).JSON({errormessage: 'controller단 오류'})

    }
  };
}
