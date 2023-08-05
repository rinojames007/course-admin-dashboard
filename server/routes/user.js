const mongoose = require('mongoose');
const express = require('express');
const { User, Course } = require('../db');
const jwt = require('jsonwebtoken');
const { userSecret, userAuthentication } = require('../middleware/userAuth');

const router = express.Router()
// user routes
router.post('/user/signup', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if(user) {
        res.status(403).json({ message: "user already exists"})
    } else {
        const newUser = new User({ username, password })
        await newUser.save();
        const token = jwt.sign({ username }, userSecret, { expiresIn: '1h' })
        res.json({ message: "user created successfully", token});
    }
});

router.post('/user/login', async (req, res) => {
    const { username, password } = req.body;
    const findUser = await User.findOne({ username, password });
    if(findUser){
        const token = jwt.sign({ username }, userSecret, { expiresIn: '1h'});
        res.json({ message: "logged in successfully", token })
    } else {
        res.status(403).json({ message: "invalid credentials", token })
    }
});

router.get('/user/course', userAuthentication, async (req, res) => {
    const allCourses = await Course.find({ published: true });
    res.json({ allCourses });
})

router.post('/user/course/:courseId', userAuthentication, async (req, res) => {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    if(course) {
        const user = await User.findOne({ username: req.user.username });
        if(user) {
            user.purchasedCourses.push(course);
            await user.save();
            res.json({ message: "course purchased successfully" });
        } else {
            res.status(404).json({ message: "user not found"})
        }
    } else {
        res.status(404).json({ message: "course not found" })
    }
})

router.get('/user/course/purchased', userAuthentication, async (req, res) => {
    const user = await User.findOne({ username: req.user.username }).populate('purchasedCourses');
    if(user){
        res.json({ purchasedCourses: user.purchasedCourses || [] });
    } else {
        res.status(403).json({ message: "user not found" });
    }
});

module.exports = router;