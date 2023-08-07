import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchData() {
            axios.get('/admin/course/view', {
                method: "GET",
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("token")
                }
            }).then(res => {
                setCourses(res.data.course);
            })
        }
        fetchData();
    }, []);

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {courses.map(course => (
                    <Course course = {course}/>
                ))}
        </div>
    );
}

function Course({course}){
    const navigate = useNavigate();

    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} style={{width: 300}} ></img>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button variant="contained" style={{marginRight: 20}} size="large" onClick={() => {
                navigate("/course/" + course._id);
            }}>Edit</Button>
            <Button variant="contained" color="error" size="large" onClick={() => {
                navigate("/course/" + course._id);
            }}>Delete</Button>
        </div>
    </Card>
}

export default Courses;