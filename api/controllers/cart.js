const Cart = require("./models/cart");

class CartControler {
  // Aca en el req.body tengo que recibir { un objeto = { hours: 15 ,canthours: 3 , clientId: 3 , parkingId: 4 }}  <= EJEMPLO
  static async addCart(req, res) {
    try {
      const data = await Cart.create(req.body);
      res.status(200).send({ message: "Added to Cart", data: data });
    } catch (error) {
      res.status(500).send({ message: "Error adding to cart" });
    }
    Cart.create(req.body);
  }

  static async removeCart(req, res) {
    try {
      const id = req.params.id;
      const cart = await Cart.findByPk(id);
      await cart.destroy();
      res.status(200).send({ message: "Removed from cart" });
    } catch (error) {
      res.status(500).send({ message: "Error removing from cart" });
    }
  }

  static async editCart(req, res) {
    //EJEMPLO de axios => axios.put("http://localhost:8080/api/cart/editcart:1?value=add") si queres agregar 1 hora , "value=del" si queres remover 1 hora
    try {
      const value = req.query.value;
      const id = req.params.id;
      const cart = await Cart.findByPk(id);
      if (query == "add") {
        cart.hours++;
      } else {
        cart.hours--;
      }
      res.status(200).send({ message: "Added 1 hours" });
    } catch (error) {
      res.status(500).send({ message: "Error server editing the hours" });
    }
  }
}
