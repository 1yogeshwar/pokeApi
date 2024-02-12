// import React, { useState } from "react";
// import '../src/App.css';

// const CreateNote = (props) => {
//     const [item, setItem] = useState({
//         title: '',
//         content: ''
//     });

//     const InputItem = (event) => {
//         const { name, value } = event.target;
//         setItem((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     }

//     const addEvent = () => {
//         props.passNote(item);
//         setItem({
//             title: '',
//             content: ''
//         });
//     }

//     return (
//         <div className="note-section">
//             <div className="note-form">
//                 <input
//                     type="text"
//                     value={item.title}
//                     onChange={InputItem}
//                     name="title"
//                     placeholder="Title"
//                     className="note-input"
//                 />
//                 <textarea
//                     rows=""
//                     cols=""
//                     value={item.content}
//                     onChange={InputItem}
//                     name="content"
//                     placeholder="Write a note."
//                     className="note-textarea"
//                 ></textarea>
//                 <button onClick={addEvent} className="add-note-button">+</button>
//             </div>
//         </div>
//     );
// }

// export default CreateNote;
