const mongoose = require("mongoose")

const connection = async (req, res) => {
    try{
    await mongoose.connect('mongodb+srv://vivekkartik:vivekkartik@todo.zbulnho.mongodb.net/')
    .then(() => {
            console.log("connected to database")
    })}
    catch(err){
            console.log('Error while connect to mongo DB',err)
        }
    
}


connection()

