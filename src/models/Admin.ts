import mongoose from "mongoose";
interface adminInterface extends mongoose.Document {
    username: string,
    password: string,
};
const adminSchema = new mongoose.Schema<adminInterface>({
    username: String,
    password: String
});
export default mongoose.model<adminInterface>('Admin', adminSchema);