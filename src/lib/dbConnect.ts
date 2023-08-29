import mongoose, { ConnectOptions } from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://rinojames007:jamesrino@rinojames007.qxqdx3e.mongodb.net/?retryWrites=true&w=majority', {
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