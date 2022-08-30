import { useRef } from "react";
import "./login.css";
import { v4 as uuidv4 } from "uuid";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const username = useRef();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    let users = localStorage.getItem("users");
    let newUser = {
      username: username.current.value,
      id: uuidv4(),
    };

    if (users) {
      let parsedOldUsers = JSON.parse(users);
      //loop through the users and check if the username is already in there
      const userPresent = parsedOldUsers.some(
        (user) => user.username === username.current.value
      );
      if (userPresent) {
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        // window.location.reload();
        // return;
        return alert(`User ${username.current.value} is already taken`);
      }
      parsedOldUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(parsedOldUsers));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      navigate("/home");
    } else {
      let usersArray = [];
      usersArray.push(newUser);
      localStorage.setItem("users", JSON.stringify(usersArray));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      navigate("/home");
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Chat App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on this Chat App.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              type="text"
              required
              className="loginInput"
              ref={username}
            />

            <button className="loginButton" type="submit">
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
