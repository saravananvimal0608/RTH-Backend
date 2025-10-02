import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI 
        const conn = await mongoose.connect(MONGO_URI)
        console.log("mongo conected");
    } catch (error) {
        console.log("mongo connection failed",error);
    }
}
export default connectDB
