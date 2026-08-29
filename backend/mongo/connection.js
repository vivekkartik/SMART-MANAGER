const mongoose = require("mongoose");
const { config } = require("../config/config");
const connection = async (req, res) => {
  try{
    await mongoose.connect(config.MONGO_URI)
      .then(() => {
        console.log("connected to database");
      });}
  catch(err){
    console.log("Error while connect to mongo DB",err);
  }
    
};

connection();

