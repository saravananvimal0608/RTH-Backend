import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const MONGO_URI = "mongodb+srv://saravanan:saravanan8838144554@cluster0.chbhv4d.mongodb.net/RTH-EXERCISE?retryWrites=true&w=majority"
        const conn = await mongoose.connect(MONGO_URI)
        console.log("mongo conected");
    } catch (error) {
        console.log("mongo connection failed",error);
    }
}
export default connectDB
