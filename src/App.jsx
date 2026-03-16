
import ComponentOne from './useState/Usestate-example1';
import './App.css'

import React,{useState} from "react";
import ComponentTwo from './useState/Usestate2';
import ComponentThree from './useState/Usestate3';
import PracticeUseEffect from './useEffect/UseEffect-ex-1';
import PracticeUseEffect2 from './useEffect/UseEffect-ex-2';
import UseEffect3 from './useEffect/UseEffect3';
import ComponentA from './usecontext/ComponentA';
import UseStateToDoList from './useState/UseStateToDoList';
import UseStateForm from './useState/UseStateForm';
import Todo from './useState/Todo';









const App = () => {
  return(
    <div>
      {/* <ComponentOne/> */}
      {/* <ComponentTwo/> */}
      {/* <ComponentThree/> */}
      {/* <PracticeUseEffect/>//use effect example one */}
      {/* <PracticeUseEffect2/> */}
      {/* <UseEffect3/> */}
      {/* <ComponentA/> */}
      {/* <UseStateToDoList/> */}
      <Todo/>
      {/* <UseStateForm/> */}
      
    </div>
  )
 
}

export default App