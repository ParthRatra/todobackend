const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description: {
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);
// shikhelgya is collection ka naam hai jo database mai mongodb compass mai bnega and s bhi attach hojata name mai compass mai jakr
module.exports = mongoose.model("shikhelgyas", todoSchema);
