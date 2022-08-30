import Login from "./pages/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Messenger from "./pages/Messenger/Messenger";

export default function App() {
  return (
    <Router>
  
          <Routes>
          <Route path="/home" element={<Messenger />} />
            <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Login />} />
                </Routes>
      
    </Router>
  );
}
