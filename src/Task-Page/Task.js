import React, { useState, useContext } from 'react'
import './Task.css'
import { Link } from 'react-router-dom'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { stateContext } from '../Context/stateContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
// import { initalvalue } from '../Context/reducer';

function Task() {

  const { state, dispatch } = useContext(stateContext);
  console.log("statecontext", state);

  const [param] = useSearchParams()
  console.log(param)
  const id = parseInt(param.get("id"))


  let getid = state.tasks.findIndex((item) => item.id === id);

  const [txt, setText] = useState(state.tasks[getid]?.txtform || "");
  const [msg, setMes] = useState(state.tasks[getid]?.msgform || "");
  const [date, setDate] = useState(state.tasks[getid]?.dateform || "");
  const [prioritize, setprioritize] = useState(false);
  // const [tasks, setevent] = useState([]);


  const handleText = (tap) => {
    setText(tap.target.value);
  };

  const handleMes = (tap) => {
    setMes(tap.target.value);
  };

  const handleDate = (tap) => {
    setDate(tap.target.value);
  }

  const handleSum = (tap) => {
    tap.preventDefault();
    if (id) {
      const temp = {
        id: id,
        txtform: txt,
        msgform: msg,
        dateform: date,
      };
      // console.log(temp);
      dispatch({ type: "update", payload: temp });
      setText("");
      setMes("");
      setDate("");
      // navigate("/Home");
    } else {
      const temp = {
        id: state.tasks.length + 1,
        txtform: txt,
        msgform: msg,
        dateform: date,
        prioritize,
        complete: false,
      };
      dispatch({ type: "setevent", payload: [...state.tasks, temp] });
      setText("");
      setMes("");
      setDate("");
      //console.log(temp);
    }
  };
  // const handleDate = (date) => {
  //   setDate(date.target.value);
  // };

  return (
    <div className="task-flex">
      <Link to="/home"><Button className='back'>Go Home</Button></Link>
      <h1>Task</h1>
      {/* <h2>{state?.age}</h2> */}
      <div className="task-input">
        <form>
          <TextField id="outlined-basic" value={txt} label="Enter Task" variant="outlined" onChange={handleText} /><br></br>
          <TextField id="outlined-basic" value={msg} label="Enter Msg" variant="outlined" onChange={handleMes} /><br></br>
          <div className="date">
            <TextField id="date" label="Date" type="date" value={date} defaultValue="2017-05-24" InputLabelProps={{ shrink: true, }} onChange={handleDate} />
          </div><br></br>
          <FormControlLabel control={<Checkbox checked={prioritize} />} label="prioritize" onChange={() => setprioritize(!prioritize)} color="secondary" />
          <div className={"taskbtn"}>
            <Button variant="contained" onClick={(tap) => handleSum(tap)}> Submit </Button>
          </div>
        </form>
        {/* {state.tasks.map((item, index) => <p key={index}>{item.txt}</p>)} */}
      </div>
    </div>
  )
}

export default Task