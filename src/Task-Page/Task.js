import React, { useState, useContext, useReducer } from 'react'
import './Task.css'
import { Link } from 'react-router-dom'
import { stateContext } from '../Context/stateContext';

function Task() {
  const [txt, setText] = useState('');
  const [msg, setMes] = useState('');
  // const [tasks, setevent] = useState([]);
  const { state, dispatch } = useContext(stateContext);
  console.log("statecontext", state);

  // const remove = (tap) =>{
  //   setevent(tasks.filter(task => task.tap !== tap))
  // }

  // const update = (tap,updatedTask) => {
  //   const updatedTasks = tasks.map(task => {
  //     if(task.tap === tap){
  //       return{...task, task:updatedTask}
  //     }
  //     return{
  //       task
  //     }
  //   })
  //   setevent(updatedTasks)
  // }

  // const toggleComplete = (tap) => {
  //   const updatedTasks = tasks.map(task => {
  //     if(task.tap === tap){
  //       return{...task,completed:! task.completed}
  //     }
  //     return task
  //   })
  //   setevent(updatedTasks)
  // }

  // const create = newTask => {
  //   setevent([...tasks,newTask])
  // }

  // const tasksList = tasks.map(task => {
  //   <Task
  //     key = {task.tap}
  //       remove = {remove}
  //       toggleComplete = {toggleComplete} 
  //       update = {update}
  //       task = {task}
  //   />
  // })


  // return (
  //   <div>
  //     <h1>Simple React tot list</h1>
  //     {/* <NewTaskForm createTask = {create}/> */}
  //     <ul>{tasksList}</ul>
  //   </div>
  // )







  const handleText = (tap) => {
    setText(tap.target.value);
  };

  const handleMes = (tap) => {
    setMes(tap.target.value);
  };

  const handleSum = (tap) => {
    tap.preventDefault();

    const temp = {
      txt,
      msg,
    };
    // setevent([...tasks, temp]);
    dispatch({ type: "set_event",payload:[...state.task, temp] });
    console.log("state", temp);
  };


  // const handleSubmit = (tap) => {
  //   setUserInput({[tap.target.value.name]:tap.target.value.name})
  // }

  return (
    <div className="task-flex">
      <Link to="/home"><button className='back'>Go Home</button></Link>
      <h1>Task</h1>
      <h2>{state?.age}</h2>
      <div className="task-input">
        <form>
          <input value={txt} placeholder="Type" onChange={handleText} />
          <textarea value={msg} placeholder="Message" onChange={handleMes} />
          <input type="date"></input><br></br>
          <button onClick={(tap) => handleSum(tap)}>Submit</button>
        </form>
        {/* {state.tasks.map((item, index) => <p key={index}>{item.txt}</p>)} */}
      </div>
    </div>
  )
}

export default Task