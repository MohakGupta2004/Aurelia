import mongoose from "mongoose";

type ConnectionObject = {
    isConnected: boolean
}

const connectionObject: ConnectionObject = {
    isConnected: false
}


async function dbConnect() {
   if(connectionObject.isConnected){
    return;
   } 

   try {
       await mongoose.connect(process.env.MONGO_URI as string);
       connectionObject.isConnected = true;
   } catch (error) {
         console.error("MongoDB connection error:", error); 
   }


}


export default dbConnect