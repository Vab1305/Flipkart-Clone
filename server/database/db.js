import mongoose from "mongoose";

export const Connection = async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@ecommerce-web.41sho16.mongodb.net/?retryWrites=true&w=majority`;
    try {
     await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
     console.log('Database Successfully connected');
    }
    catch (error) {
        console.log('Error while conecting with the database',error.message);
    }
}
export default Connection;
  