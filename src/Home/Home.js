import React, { useContext } from 'react'
import { createSearchParams, Link,useNavigate } from 'react-router-dom';
import './Home.css';  
import { stateContext } from '../Context/stateContext';
// import { type } from '@testing-library/user-event/dist/type';


const Home = () => {
  const { state, dispatch } = useContext(stateContext);
  console.log("state", state);  

  const navigate = useNavigate();

  // const listitems = () => {
  //   navigate("/Task")
  // }

  const deleteitems = (id) => {
    dispatch({type:"deltask",payload:id})
  }

  const edititems = (id) => {
    navigate({
      pathname: "/Task",
      search: createSearchParams({
        id:id
      }).toString()
    })    
  }

   



  return (
    <div className="home-flex">
      <div className="container">
        {/* <h1>{state?.age}</h1> */}
        <div className="home-head">
          <h2><Link to={"/"}><button>Go Back</button></Link></h2>
          <h1><Link to={"/Task"}><button>Add Task</button></Link></h1>
        </div><hr></hr>

        {state.tasks?.map((item, index) => {
          return (
            <div key={index} className="ed-del">
              {item.txt}<br></br>{item.msg}<br></br>{item.date}
                <button onClick={()=> edititems(item.id)}>edit</button>
                <button onClick={()=> deleteitems(item.id)}>delete</button>  
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home