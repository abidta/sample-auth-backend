import mongoose from "mongoose";

export const connectDb= ()=>{
   
   mongoose.connect(process.env.MONGO_URI,{dbName:'sample-auth'}).then((stat)=>{
        console.log(`Mongo db connected in  ${stat.connection.host}:${stat.connection.port}`);
        
    }).catch((err)=>{
        console.log(err);
        process.exit(1)
    })
  
}
