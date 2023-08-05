import Appbar from "./components/Appbar.jsx";
import SignUp from "./SignUp.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from "./SignIn.jsx";
import AddCourse from "./AddCourse.jsx";
import Course from "./Course.jsx";
function App () {

    return (
        <>
            <div>
                <Router>
                    <Routes>
                        <Route path={'/'} element={<Appbar />} />
                        <Route path={'/signup'} element={<SignUp />} />
                        <Route path={'/signin'} element={<SignIn />} />
                        <Route path={'/addcourse'} element={<AddCourse />} />
                        <Route path={'/course'} element={<Course />} />
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App;