const mongoose = require("mongoose")

const schema = {
    shortId : {
        type : String,
        required : true,
        unique : true
    },
    redirectUrl :{
        type : String,
        required : true
    },
    visitHistory : [ 
        {
         timestamps : {
            type : Number
         }  
        }
     ]
} 


const urlSchema = new mongoose.Schema(schema,{timestamps : true})
const Url = mongoose.model('url',urlSchema)

module.exports = {Url}