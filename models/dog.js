const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({ 
    dogType: { type: String, minLength: 5 }, 
    price: { type: Number, min: 100, max: 10000 }, 
    color: String 
}) 
 
module.exports = mongoose.model("Dogs", 
dogSchema)