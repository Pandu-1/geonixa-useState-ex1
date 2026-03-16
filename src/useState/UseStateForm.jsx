import React, { useState } from 'react'

const UseStateForm = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")

const changeName=(e)=>{
    console.log(e.target.value);
    setName(e.target.value)
}

const changeEmail=(e)=>{
    console.log(e.target.value);
    setEmail(e.target.value)
}

const changePassword=(e)=>{
    console.log(e.target.value);
    setpassword(e.target.value)
    
}

const donotRefresh =(e)=>{
    e.preventDefault();
}

let userDetails={

    name:name,
    email:email,
    password:password
}
console.log(userDetails);


  return (
    <div>
        <form  style={{textAlign:'center'}} onSubmit={donotRefresh}>
            <input type="text" name="name" id="name" placeholder='enter your name' value={name} onChange={changeName}/><br/>
            <input type="email" name="email" id="email" placeholder='enter your mail' value={email} onChange={changeEmail}/><br/>
            <input type="password" name="password" id="password" placeholder='enter password' value={password} onChange={changePassword}/><br/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default UseStateForm