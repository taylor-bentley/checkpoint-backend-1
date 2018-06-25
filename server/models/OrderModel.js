const mongoose = require("mongoose");
 	 
const schema = new mongoose.Schema({
    "name": {	
        required: true,	
        type: String
    },  
    "orderDate": {	
        required: true,	
        type: Date
    },
    "orderTime": {	
        required: true,	
        type: Number
    },
    "amount": {	
        required: true,	
        type: Number	
    }
});

module.exports = mongoose.model("Order", schema);