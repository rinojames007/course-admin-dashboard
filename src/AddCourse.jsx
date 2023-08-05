import AppBar from "./components/Appbar.jsx";
import {Button, Card, Checkbox, CircularProgress, TextField, Typography} from '@mui/material';
import {useState} from "react";
function AddCourse () {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageLink, setImagelink] = useState("");
    const [published, setPublished] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleUpload() {
        setLoading(true);
        const data = {
            title,
            description,
            price,
            imageLink,
            published
        }

        const response = await fetch('/admin/course/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : "Bearer " + localStorage.getItem("token")
            },
            body: JSON.stringify(data)});
        if(response.ok) {
            const responseData = await response.json();
            console.log(responseData);
            setLoading(false);
        }
    }

    return (
        <>
            <AppBar/>
            <Card style={{width:'20vw', margin:'20vh auto', padding:'2rem', textAlign:'center'}}>
                <Typography variant={'h5'}>
                    Add Course
                </Typography>
                <TextField id="title" label="Title" onChange={(e) => setTitle(e.target.value)} style={{margin:".5em"}} variant="outlined" />
                <TextField id="description" label="Description" onChange={(e) => setDescription(e.target.value)} style={{margin:".5em"}} variant="outlined" />
                <TextField id="price" label="Price" onChange={(e) => setPrice(e.target.value)} style={{margin:".5em"}} variant="outlined" />
                <TextField id="imageLink" label="Image Link" onChange={(e) => setImagelink(e.target.value)} style={{margin:".5em"}} variant="outlined" />
                <p style={{fontFamily: "inherit"}}>Published?<Checkbox checked={published} onChange={(e) => {setPublished(e.target.checked)}} /></p>
                <Button variant="contained" onClick={handleUpload} style={{display:"block", margin:"0 auto"}}>
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Add Course'}
                </Button>
            </Card>
        </>
    )
}

export default AddCourse;