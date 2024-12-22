const mongoose = require("mongoose")
const settings = require("../settings")



   mongoose.connect(settings.MONGODB_CONNECTION_URL)
   .then((conn, err)=>{
    console.log("connected to mongodb successfully!")
   })
   .catch(err=> console.log("error connecting to mongodb: ", err));
