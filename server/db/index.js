const mongoose = require('mongoose');

// schemas
const userSchema = new mongoose.Schema ({
    username: String,
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
    //referencing to the course table
});

const adminSchema = new mongoose.Schema ({
    username: String,
    password: String
});

const courseSchema = new mongoose.Schema ({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});

// models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = {
    User,
    Admin,
    Course
}