


//SET CURRENT TIME AND DATE
//import React, { useState } from "react";


// const App = () => {
//   const newTtime=new Date().toLocaleTimeString()
//   const [count, setCount] = useState(newTtime);

//   const updateTime = () => {
//     // Update count with the current time
//     setCount(new Date().toLocaleTimeString());
//   };

  // Use useEffect to update the time every second
  

         
   // Empty dependency array ensures the effect runs only once on mount

//   return (
//     <>
//       <h1>This is the way to rock the world</h1>
//       <h1>{count}</h1>
//       <button onClick={updateTime} >Click Here</button>
   
//     </>
//   );
// };



//CREATE INPUT FEILD AND HANDLING INPUT 

// import React, { useState} from "react";

// const App =() => {

//   const [name, fullName] = useState("");
//   const[nwName, submitName]= useState();
//   const [lname, lfullName] = useState("");
//   const[lnwName, lsubmitName]= useState();
  


//   const inputEvent =(event) =>{
//     fullName(event.target.value);num
  
//   }

//   const finputEvent=(event) =>{
//     lfullName(event.target.value);num
//   }

// const SubmitEv = () => {
//   submitName(name);
//   lsubmitName(lname);

// }



//   return (
// <>
//    <h1>Hello,{nwName} {lnwName}</h1>
//   <input type="text" placeholder="Enter your name" onChange={inputEvent}
//     value={numname}
//   />
   



//   <input type="text" placeholder="Enter your name" onChange={finputEvent}
//     value={numlname}
//   />
//    <button onClick={SubmitEv}>Click Me</button>
// </>




//   )
// }









//TODO LIST : CREATING THE LIST AND DELETE THE ITEMS
// const App = () => {
//   const [items, setItems] = useState([]);
//   const [item, setItem] = useState("");

//   const inputEve = (event) => {
//     setItem(event.target.value);num
//   };

//   const submitEv = () => {
//     setItems([...items, item]);
//     setItem(""); // Clear the input field after adding an item
//   };

//   const deleteItem = (id) => {
//     console.log("deleted");
//     setItems((prevItems) => {
//       return prevItems.filter((_, index) => index !== id);
//     });
//   };

//   return (
//     <>
//       <div className="main">
//         <div className="center">
//           <hr />
//           <h1>TO DO LIST</h1>
//           <hr />
//           <input type="text" placeholder="Enter the Items" onChange={inputEve} value={numitem} />
//           <button onClick={submitEv}> + </button>
//           <ul type="none">
//             {items.map((itemName, index) => (
//               <TodoList key={index} id={index} text={itemName} onSelect={deleteItem} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };



// INCREMENT AND DECREMENT STATE VARIABLE SET TO ZERO

// const App = () => {
//   const [count, setCount] = useState(0);

//      const incState= () =>{
//       setCount(count+1);
//      }

//      const decState= ()  =>{
//       if(count > 0){
//          setCount(count-1);
//       }else {
//         setCount(0);
//         alert("limit is reached");
//       }
     
//      }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={incState}>Increment</button>
//       <button onClick={decState}>Decrement</button>
//     </>
//   );
// };

// export default App;



//google keep


// import React, { useState } from "react";
// import Header from './Header';
// import Footer from './Footer';
// import Note from './Note';
// import CreateNote from "./CreateNote";


// const App = () => {
  
//   const [addItem, setAddItem] =useState([])    
//   const addNote =(item)  => {
//        setAddItem((preData) =>{
//         return [...preData, item];
//        })  
//   }

//   const onDelete =(id) =>{
//     setAddItem((oldData)=>{
//         return oldData.filter((currData, idx) =>{
//             return idx !==id;
//         })
//     })



//    }
//     return (
//         <>
//           <Header /> 
//           <CreateNote  passNote={addNote} />  
//          { addItem.map((val, index)=>{
//             return <Note 
//               key={index}
//               id={index}
//               title={val.title}
//               content={val.content}
//               deleteItem={onDelete}

//             />
//           })}
       
//           <Footer />   
//         </>
//     );
// }

// export default App;
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [num, setNum] = useState(1); // Initialize num with a default value
  const [name, setName] = useState("");
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${num}`
        );
        setName(res.data.name);
        setMoves(res.data.moves);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    }
    getData();
  }, [num]); // Execute the effect whenever num changes

  const handleChange = (event) => {
    setNum(event.target.value);
  };

  return (
    <>
      <h1>You Choose <span style={{ color: "red" }}>{num}</span> value</h1>
      <h1>My name is <span style={{ color: "red" }}>{name}</span></h1>
      <h1>I have <span style={{ color: "red" }}>{moves.length}</span> moves </h1>
      <select value={num} onChange={handleChange}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default App;
