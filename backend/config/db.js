const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

require('dotenv').config()
const connectDb = async () =>{

   try {
      const connect = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      if(connect){
          console.log(`mongodb connected ${connect.connection.host}`)
      }
   } catch (error) {
      console.log("connection failed", error)
   }
   
}

module.exports = connectDb
