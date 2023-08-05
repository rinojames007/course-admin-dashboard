const mongoose = require('mongoose');
const express = require('express');
const { User, Admin, Course } = require('../db');
const jwt = require('jsonwebtoken');
const { adminSecret, adminAuthentication} = require('../middleware/adminAuth');

const router = express.Router()

// admin routes
router.post('/admin/signup', async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username })
    if(admin){
        res.status(403).json({ message: 'user already exists'});
    } else {
        const newAdmin = new Admin({ username, password })
        await newAdmin.save()
        const token = jwt.sign({ username }, adminSecret, { expiresIn: '2h'});
        res.json({ message: "user created successfully", token })
    }
});

router.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;
    const findAdmin = await Admin.findOne({ username, password });
    if(findAdmin) {
        const token = jwt.sign({ username }, adminSecret, { expiresIn: '2h'});
        res.json({ message: "user found successfully", token })
    } else {
        res.status(401).json({ message: "invalid credentials" });
    }
});

router.post('/admin/course/add', adminAuthentication, async(req, res) => {
    const { title, description, price, imageLink, published } = req.body;
    const newCourse = new Course({ title, description, price, imageLink, published });
    await newCourse.save()
    res.json({ message: "course added successfully" })
});

router.put('/admin/course/:courseId', adminAuthentication, async(req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
    if(course) {
        res.json({ message: "course updated successfully" })
    } else {
        res.status(404).json({ message: "course not found"})
    }
});

router.delete('/admin/course/edit', adminAuthentication, async (req, res) => {
    const { _id } = req.body;
    await Course.deleteOne({ _id: _id });
    res.json({ message: "course deleted successfully "})
})


router.get('/admin/course', adminAuthentication, async (req, res) => {
    const allCourses = await Course.find({});
    res.json({ allCourses });
})

module.exports = router;