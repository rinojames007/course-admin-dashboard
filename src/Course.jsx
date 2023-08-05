import {useEffect, useState} from "react";

function Course() {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/admin/course', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + localStorage.getItem('token')
                }
            })
            if(response.ok) {
                const responseData = await response.json()
                const { allCourses } = responseData;
                console.log(allCourses)
            }
        }
        fetchData();
    }, []);

    return (
        <>
            hello world
        </>
    )
}

export default Course;