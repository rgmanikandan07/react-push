import React, { useState, useContext } from 'react'
import './Task.css'
import { Link } from 'react-router-dom'
// import { Navigate } from 'react-router-dom';
import { stateContext } from '../Context/stateContext';
// import { initalvalue } from '../Context/reducer';

function Task() {
  const [txt, setText] = useState("");
  const [msg, setMes] = useState("");
  const [date, setDate] = useState('');
  // const [tasks, setevent] = useState([]);

  const { state, dispatch } = useContext(stateContext);
  console.log("statecontext", state.tasks);

  // const [param] = useSearchParams();
  // const navigate = useNavigate();
  // const id = parseInt(param.get("id"));


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

    const temp = {
      id: state.tasks.length + 1,
      txt,
      msg,
    };
    console.log(state.tasks)
    setText("");
    setMes("");
    setDate("");
    // setevent([...tasks, temp]);
    dispatch({ type: "setevent",payload:[...state.tasks, temp] });
    console.log("state", temp);
  };

  return (
    <div className="task-flex">
      <Link to="/home"><button className='back'>Go Home</button></Link>
      <h1>Task</h1>
      {/* <h2>{state?.age}</h2> */}
      <div className="task-input">
        <form>
          <input value={txt} placeholder="Type" onChange={handleText} />
          <textarea value={msg} placeholder="Message" onChange={handleMes} />
          <input value={date} type="date" onChange={handleDate}></input><br></br>
          <button onClick={(tap) => handleSum(tap)}>Submit</button>
        </form>
        {/* {state.tasks.map((item, index) => <p key={index}>{item.txt}</p>)} */}
      </div>
    </div>
  )
}

export default Task