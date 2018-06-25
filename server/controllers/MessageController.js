const MessageModel = require("../models/MessageModel");

module.exports.list = ((req, res) => {
    MessageModel.find({}).exec()
    .then(messages => {
        return res.json(messages);
    });
});
    
module.exports.show = ((req, res) => {
    MessageModel.findById({"_id": req.params.id}).exec()
        .then(message => {
            res.json(message);
        });
});
    
module.exports.create = ((req, res) => {
    const newMessage = new MessageModel({
        name: req.body.name,
        date: new Date(),
        message: req.body.message
    });
    newMessage.save()
    .then(savedMessage => {
        res.json(savedMessage);
    });
});