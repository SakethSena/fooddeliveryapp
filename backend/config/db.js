

import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://sakethsenapathi7799:QwErTyUiOp1234@quickbuy.a4neo0g.mongodb.net/').then(()=>console.log("DB Connected"));
   
}