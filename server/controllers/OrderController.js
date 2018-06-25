const OrderModel = require("../models/OrderModel");

module.exports.list = ((req,res) => {
    OrderModel.find({}).exec()
    .then(orders => {
        return res.json(orders);
    });
});
      
module.exports.show = ((req, res) => {
    OrderModel.findById({"_id":req.params.id}).exec()
    .then(order => {
        res.json(order);
    });
});
    
module.exports.create = ((req, res) => {
    const newOrder = new OrderModel({
        orderDate: Date(),
        orderTime: Date(),
        amount: req.body.amount
    });
    newOrder.save()
    .then(savedOrder => {
        res.json(savedOrder);
    });
});