import {Button, Card, TextField, Typography} from '@mui/material';
import Appbar from "./components/Appbar.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    async function handleSignup() {
        const data = {
            username: username,
            password: password
        };

        await axios.post('/admin/signup', data, {
            method: 'GET'
        }).then(res => {
            const { token } = res.data;
            localStorage.setItem('token', token);
            navigate('/addcourse');
        })
    }

    return (
        <>
            <Appbar/>
            <Card style={{width:'20vw', margin:'20vh auto', padding:'2rem', textAlign:'center'}}>
                <Typography variant={'h5'}>
                    Welcome, explore our world.
                </Typography>
                <TextField id="username" label="Username" onChange={(e) => setUsername(e.target.value)} style={{margin:".5em"}} variant="outlined" />
                <TextField id="password" label="Password" onChange={(e) => setPassword(e.target.value)} style={{margin:".5em"}} variant="outlined" />
                <Button variant="contained" onClick={handleSignup} style={{display:"block", margin:"0 auto"}}>Sign Up</Button>
            </Card>
        </>
    )
}

export default SignUp;