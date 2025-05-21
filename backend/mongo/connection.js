const mongoose = require("mongoose");
require("dotenv").config();

const connection = async (req, res) => {
  try{
    await mongoose.connect(process.env.MONGO_URI)
      .then(() => {
        console.log("connected to database");
      });}
  catch(err){
    console.log("Error while connect to mongo DB",err);
  }
    
};

connection();

