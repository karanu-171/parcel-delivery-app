const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

require('dotenv').config()
const connection = async () =>{

   try {
      const connect = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      if(connect){
          console.log(`mongodb connected`)
      }
   } catch (error) {
      console.log("connection failed", error)
   }
   
}

module.exports = connection;
