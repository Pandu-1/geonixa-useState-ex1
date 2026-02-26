
import './index.css'

import React,{useState} from "react";





const App = () => {

 const [count,setCount]=useState(0);


const increment=()=>{

  setCount((count)=>{
    return count+1;
  });
  setCount((count)=>{
    return count+1;
  })
 

}

const decrement=()=>
  setCount(count-1);

 
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  
  )
}



  {/* <li className='comment'>
      <div className='comments-header'>
        <h3 className='email'>email@email.com</h3>
        <h3 className='name'>some name random name</h3>
      </div>
      <p className='message'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Fugit nemo beatae delectus ipsam tenetur dolore! Hic quia voluptate laboriosam
         molestias esse incidunt rem, cumque fuga culpa deleniti saepe minima possimus?
      </p>
    </li> */}

export default App