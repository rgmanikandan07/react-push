import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import { stateContext } from '../Context/stateContext';


const Home = () => {
  const { state, dispatch } = useContext(stateContext);
    console.log("statecont", state);

  // const [isEditing,setIsEditing] = useState(false)
  // // const [txt,setTask] = useState(txt.task) 

  // const handleClick = (tap) => {
  //   remove(tap.target.tap)
  // }
  // const toggleForm = () =>{
  //   setIsEditing(!isEditing)
  // }
  // const handleSubmit = (tap) =>{
  //   dispatch(...Home.tap.target.value)
  // }



  // let result;
  // if(isEditing){
  //   result = (
  //     <div>
  //       <from>
  //         <input value={state} onChange={handleSubmit} />
  //         <button>Save</button>
  //       </from>
  //     </div>
  //   )
  // }else{
  //   result = (
  //     <div>
  //       <li tap={state.tap} onClick={toggleComplete} className={state.completed? "task completed": "Task-task"}></li>
  //       <button onClick={toggleForm}>Edit</button>
  //       <button onClick={handleClick}>delete</button>

  //     </div>
  //   )
  // }




  return (
    <div className="home-flex">
      <div className="container">
        {/* <h1>{state?.age}</h1> */}
        <div className="home-head">
          <h2><Link to={"/"}><button>Go Back</button></Link></h2>
          <h1><Link to={"/Task"}><button>Add Task</button></Link></h1>
        </div><hr></hr>
        {/* <div className='home-btn'>
          <button>EDIT</button>
          <button>DELETE</button>
        </div> */}

        {state.task?.map((item, index) => <h2>{item.txt}</h2>)}
      </div>
    </div>
  )
}

export default Home