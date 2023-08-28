import mongoose, {connection} from "mongoose";

const URI: string = process.env["connectionStr "] as string;

const dbConnect = async () => mongoose.connect(URI as string);

export default dbConnect;