const { application } = require("express")
const mongoose = require("mongoose")

async function ConnectMongoDb(){
    try{
        await mongoose.connect("mongodb+srv://aftabbaloch69:<password>@url-shortner.pw2xiot.mongodb.net/?retryWrites=true&w=majority");
        console.log("MongoDb Connected")
    }
    catch(err){
        console.log("Error connecting MongoDb!")
    }
}

module.exports = {ConnectMongoDb}