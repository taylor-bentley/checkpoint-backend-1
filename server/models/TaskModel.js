const mongoose = require("mongoose");
 	 
const schema = new mongoose.Schema({
    "task": {	
        required: true,	
        type: String	
    }, 
    "date": {	
        required: true,	
        type: Date
    }
});

module.exports = mongoose.model("Task", schema);