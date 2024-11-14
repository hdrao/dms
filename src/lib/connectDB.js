import mongoose from "mongoose"


export default async function connectDB () {
    let connection

   
    if(connection?.Connection?.readyState != 1) {

    connection = await mongoose.connect("mongodb+srv://Admin:admin@raodproject.vmer2.mongodb.net/doctorapointment")
        console.log("DB Conected");
        
}

}