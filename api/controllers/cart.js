const Parkings = require("../models/Parkings");
const Cart = require("../models/Carts");

class CartController {
  // Aca en el req.body tengo que recibir { un objeto = { ["15","16","17"] , clientId: 3 , parkingId: 4 }}  <= EJEMPLO
  
  static async allCart(req,res) {
    try {
      const userid = req.params.userId.slice(1) ;
      console.log(userid)
      const cart = await Cart.findAll({where: {
        clientId : userid
      }, include :{ model: Parkings ,association: 'parking',foreignKey: 'parkingId' }})
      console.log()
      res.status(200).send({message: "The cart was founded" , data : cart})
    } catch (error) {
      res.status(500).send("Error al encontrar el carrito")
    }
  }
  
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
      const id = req.params.id.slice(1);
      const cart = await Cart.findByPk(id);
      await cart.destroy();
      res.status(200).send({ message: "Removed from cart" });
    } catch (error) {
      res.status(500).send({ message: "Error removing from cart" });
    }
  }

  static async editCart(req, res) {
    //EJEMPLO de axios => axios.put("http://localhost:8080/api/cart/editcart:1") si queres agregar 1 hora , "value=del" si queres remover 1 hora
    try {
      const hoursMod = req.body.hours
      console.log(hoursMod)
      const id = req.params.id.slice(1);
      console.log(id)
      const cart = await Cart.findByPk(id);
      console.log(cart.hours)
      cart.update({hours:hoursMod});
      res.status(200).send({ message: "Cart modificate" });
    } catch (error) {
      res.status(500).send({ message: "Error server editing the hours" });
    }
  }
}

module.exports = CartController;