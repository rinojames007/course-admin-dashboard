import Appbar from "./components/Appbar.jsx";
import SignUp from "./SignUp.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from "./SignIn.jsx";
function App () {
    return (
        <>
            <div style={{background:'grey'}}>
                <Router>
                    <Routes>
                        <Route path={'/'} element={<Appbar />} />
                        <Route path={'/signup'} element={<SignUp />} />
                        <Route path={'/signin'} element={<SignIn />} />
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App;