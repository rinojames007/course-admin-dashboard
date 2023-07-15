import {Button, Card, TextField, Typography} from '@mui/material';
import Appbar from "./components/Appbar.jsx";
import {useState} from "react";
function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignup() {
        const data = {
            username: username,
            password: password
        };

        const response = await fetch('/admin/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if(response.ok) {
            const responseData = await response.json();
            const { token } = responseData;
            localStorage.setItem('token', token);
            console.log("singup successfull")
        }
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