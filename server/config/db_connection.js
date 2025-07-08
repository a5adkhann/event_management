const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://asadkaptech:event_management_pass@cluster0.x3xuon0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Mongodb Connected");
    }
    catch(err){
        console.log(err);
    }
}


module.exports = connectDB;