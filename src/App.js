import Login from "./pages/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Messenger from "./pages/Messenger/Messenger";

export default function App() {
  const user = localStorage.getItem("currentUser");
  return (
    <Router>
        {user ? 
        <>
          <Routes>
          <Route path="/" element={<Messenger />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </> :
                  <Routes>
                    <Route path="/login" element={<Login />} />
                  <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
        }
    </Router>
  );
}
