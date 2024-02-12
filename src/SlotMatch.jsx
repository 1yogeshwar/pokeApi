import React from "react";

const SlotMatch = () => {
        // let x = '😂'; 
        // let y = '😂';
        // let z = '😂';
        let x=7;
      
        if (x%2===0 && x%5 === 0) {
          return (
            <div>
              <h1>{x}</h1>
              <h1>FizzBuzz</h1>
            </div>
          );
        } else if(x%2===0) {
          return <div>
         
          <h1>Fizz</h1>
        </div>
        }else 
        {
          return <div>
        
          <h1>Buzz</h1>
        </div>
        }
      };
      export default SlotMatch;
