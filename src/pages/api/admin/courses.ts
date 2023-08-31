import type { NextApiRequest, NextApiResponse } from "next";
import {authenticate} from "@/lib/authenticate";
import connectToDatabase from "@/lib/dbConnect";
import Course from "@/models/Course";

connectToDatabase();
const viewCourses = async (req: NextApiRequest, res: NextApiResponse) => {
    const course = await Course.find()
    console.log({ course });
};
export default authenticate(viewCourses);