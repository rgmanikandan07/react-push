import React, { useContext } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import './Home.css';
import { stateContext } from '../Context/stateContext';
import Button from '@mui/material/Button';
// import Addtask from '../Task-Page/Task';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


const Home = () => {
  const { state, dispatch } = useContext(stateContext);
  console.log("state", state);

  const navigate = useNavigate();

  const listitems = () =>{
    navigate("/Task")
   }
  

  const deleteitems = (id) => {
    dispatch({ type: "deltask", payload: id })
  }

  const edititems = (id) => {
    navigate({
      pathname: "/Task",
      search: createSearchParams({
        id: id
      }).toString()
    })
  }

    const asending = ()=>{
      let sort = state.tasks.sort((a,b) => (a.txt > b.txt) ? 1:-1)

      dispatch({type:"asending",payload:sort})
    }

    const desending = ()=>{
      let sort = state.tasks.sort((a,b) => (a.txt < b.txt) ? 1:-1)

      dispatch({type:"desending",payload:sort})
    }

  const handlecomplete = (index) => {
    //console.log("item",index);
    let temp = [...state.event];

    const data = temp?.map((Obj, i) => {
      if (i === index) {
        return {
          ...Obj,
          complete: !Obj.complete
        }
      } else return Obj
    })
    // temp[index].complete = !item.complete;
    dispatch({ type: "Addtask", payload: data });
  }


  return (
    <div className="home-flex">
      <div className="container">
        {/* <h1>{state?.age}</h1> */}
        <div className="home-head">
          <Link to={"/"}><Button>Go Back</Button></Link>
            <Button id="bttn" variant="contained" onClick={asending}>Ascending</Button>
            <Button id="bttn" variant="contained"  onClick={desending}>Desending</Button>
            <Button variant="contained">Filter</Button>
          <Link to={"/Task"}><Button variant="contained" onClick={() => listitems()}>Add Task</Button></Link>
        </div>
        <hr></hr>

        {state.tasks?.map((item, index) => {
          return (
            <div key={index} className="ed-del">
              <h2>{item.txtform}</h2>
              <h3>{item.msgform}</h3><br />
              <h4>{item.date}</h4>
              <FormControlLabel control={<Checkbox checked={item.complete} />} label="complete" onChange={() => handlecomplete(index)} color="secondary" />
              <FormControlLabel control={<Checkbox checked={item.prioritize} />} label="prioritize" color="secondary" /><br></br>
              <Button variant="contained" onClick={() => edititems(item.id)}>Edit</Button>
              <Button variant="contained" onClick={() => deleteitems(item.id)}>Delelte</Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home