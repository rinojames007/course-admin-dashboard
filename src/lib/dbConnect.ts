import mongoose, { ConnectOptions } from "mongoose";

/**
 * @type string URI - environment variable that stores the connection string
 */
const URI: string = process.env.NEXT_PUBLIC_connectionStr as string;
/**
 * Function that is used to connect to the mongoDB cloud instance
 */
const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName:"test",
        } as ConnectOptions);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

export default connectToDatabase;