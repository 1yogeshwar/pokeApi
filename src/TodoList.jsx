import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";





// const TodoList = (props) => {

        

      
//         return (
//                 <>
//                         <div className="todoStyle">
//                         <i className="fa fa-close" onClick={() => {
//                                props.onSelect(props.id);
//                         }} ></i>
//                                 <li>{props.text}</li>
                                
                                
                
                                
//                         </div>
//                 </>

//         );


// }

     const TodoList= ()  => {   
   
      const [item, addItem]= useState("");
      const [newitems, nextItem]= useState([]);


      const inputItem = (event)  =>{
          addItem(event.target.value);
      }

      const submitItem =() => {
          nextItem((preVal) =>{
            return [...preVal, item]
          });
      }
     return(
     <>
      <div className="mainDiv">
  <hr />
  <h1>To Do List</h1>
  <hr />
  <div className="center">
  <input type="text" onChange={inputItem} 
    value={item}
  /> 
  
  <Button className="newBtn" onClick={submitItem}>
    <AddIcon />
  </Button>
  
</div>
<ol className="oList" type="none">
  {newitems.map((val) => {
    return <li key={val}>{val}</li>;
  })}
</ol>

  </div>


     </>

     );
     }
export default TodoList;