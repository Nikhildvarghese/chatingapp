import mongoose, { mongo } from "mongoose";
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to MongoDb")

    } catch (error) {
        console.log("error connecting MongoDB", error.message);

    }
}
export default connectToMongoDB