import React from 'react'
import { useState } from 'react';
import './Login.css';
import User from './user.json'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [userpwd, setPwd] = useState("");
  const Navigate = useNavigate()

  const handleUserName = (ev) => {
    console.log("ev", ev);
    setUsername(ev.target.value);
  };

  const handleUserPwd = (ev) => {
    setPwd(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    User.filter((item) => {
      if (item.username === username) {
        Navigate("home")
      }
      console.log(item.name)
    })


    if (username === '' || userpwd === '') {
      alert("Invalid");
      return;
    }
    console.log("state", username, userpwd);
  };

  return (
    <div className="login-flex">
      <div className="container">
        <div className="log">
          <h2>Login</h2>
          <form>
            <input value={username} placeholder="Username" onChange={handleUserName} />
            <input value={userpwd} type="password" placeholder="Password" onChange={handleUserPwd} />
            <button onClick={(ev) => handleSubmit(ev)}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login