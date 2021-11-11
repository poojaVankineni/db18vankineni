const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({ 
    dogType: String, 
    price: Number, 
    color: String 
}) 
 
module.exports = mongoose.model("Dogs", 
dogSchema)