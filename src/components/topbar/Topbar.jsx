import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./topbar.css";
import { Logout, PowerOff } from "@mui/icons-material";

const Topbar = () => {
  const logout = () => {
    // localStorage.removeItem("cuurentUser");
    // window.location.reload();
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Chat App</span>
      </div>
    </div>
  );
};

export default Topbar;
