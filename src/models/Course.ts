import mongoose from "mongoose";

interface courseInterface extends mongoose.Document {
    title: string,
    description: string,
    price: number,
    imageLink: string,
    published: boolean
};
const courseSchema = new mongoose.Schema<courseInterface>({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});
const Course = mongoose.models.Course || mongoose.model<courseInterface>('Course', courseSchema);
 export default Course;