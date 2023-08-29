import mongoose, { Document } from "mongoose";
export interface adminInterface extends Document {
    username: string,
    password: string,
};
const adminSchema = new mongoose.Schema<adminInterface>({
    username: String,
    password: String
});

const Admin = mongoose.models.Admin || mongoose.model<adminInterface>('Admin', adminSchema);

export default Admin;
