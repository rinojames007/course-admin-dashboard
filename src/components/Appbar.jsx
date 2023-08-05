import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Appbar({ user, handleLogout }) {
    const navigate = useNavigate();

    function handleSignUp() {
        navigate('/signup');
    }
    function handleSignIn() {
        navigate('/signin');
    }

    return (
        <>
            <section style={{ display: 'flex', justifyContent: "space-between", paddingTop: '1em', width: '98vw' }}>
                <div>
                    <Typography variant={'h5'} style={{ marginLeft: '1.5em' }}>Shop</Typography>
                </div>
                <div style={{ display: "flex", justifyContent: 'space-between', gap: '0.5em' }}>
                    {
                        user && (
                        <>
                            <Typography variant={'h5'} style={{ marginLeft: '1.5em' }}>{user}</Typography>
                            <Button variant="contained" onClick={handleLogout}>logout</Button>
                        </>
                        )

                    }
                    {
                        !user && (
                            <>
                                <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
                                <Button variant="contained" onClick={handleSignIn}>Sign In</Button>
                            </>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Appbar;
