import React from 'react'
import { useState } from 'react';
import './Login.css';
import User from './user.json'
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
          <TextField id="outlined-basic" label="Username" variant="outlined" onChange={handleUserName} /><br></br>
          <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" onChange={handleUserPwd}/><br></br>
          <Button variant="contained" type="password" onClick={(ev) => handleSubmit(ev)}>Login</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login