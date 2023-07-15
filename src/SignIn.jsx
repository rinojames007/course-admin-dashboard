import {Button, Card, CircularProgress,TextField, Typography} from '@mui/material';
import Appbar from "./components/Appbar.jsx";
import {useState} from "react";
function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleSignin() {
        setLoading(true)
        const data = {
            username: username,
            password: password
        };

        const response = await fetch('/admin/login', {
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
            setUser(username);
            setLoading(false)
        }
    }

    function handleLogout() {
        setUser(null);
    }

    return (
        <>
            <Appbar user={user} handleLogout={handleLogout} />
            <Card style={{width:'20vw', margin:'20vh auto', padding:'2rem', textAlign:'center'}}>
                <Typography variant={'h5'}>
                    Welcome Back.
                </Typography>
                <TextField id="username" label="Username" onChange={(e) => setUsername(e.target.value)} style={{margin:".5em"}} variant="outlined" />
                <TextField id="password" label="Password" onChange={(e) => setPassword(e.target.value)} style={{margin:".5em"}} variant="outlined" />
                <Button variant="contained" onClick={handleSignin} style={{display:"block", margin:"0 auto"}}>
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
                </Button>
            </Card>
        </>
    )
}

export default SignIn;