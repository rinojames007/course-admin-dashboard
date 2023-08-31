import { useState } from 'react';
import axios from 'axios';
import {Button, Card, TextField, Typography} from "@mui/material";
import {setCookie, getCookie} from "@/lib/cookie";
const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = async () => {
        try {
            const response = await axios.post('/api/admin/signin', { username, password });
            const { token } = response.data;
            setCookie('token', token);
            console.log(getCookie('token'));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Card style={{width:'20vw', margin:'20vh auto', padding:'2rem', textAlign:'center'}}>
            <Typography variant={'h5'}>
                Welcome, explore our world.
            </Typography>
            <TextField id="username" label="Username" onChange={(e) => setUsername(e.target.value)} style={{margin:".5em"}} variant="outlined" />
            <TextField id="password" label="Password" onChange={(e) => setPassword(e.target.value)} style={{margin:".5em"}} variant="outlined" />
            <Button variant="contained" onClick={handleSignin} style={{display:"block", margin:"0 auto"}}>Sign Up</Button>
        </Card>
    );
};

export default Signup;