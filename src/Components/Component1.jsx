import React from "react";

import {useState} from "react";

function ComponentOne(){

    const initialObject={
        name:"surya",
        age:21,
        lastname:"yashu"
    }

    const [data,setData]=useState(initialObject)

    const changeName=()=>{
        setData({
                ...data,
                name:"chowdary"
            });
    }

    const changeLastName=()=>{
        setData({
            ...data,
            lastname:"vadisana"
        });
    }

    const changeAge=()=>{
        setData({
            ...data,
            age:10
        })
    }

    return (
        <div className="element">
            <h1>my name is {data.name}</h1>
            <button onClick={changeName}>change name</button>
            <h1>my name is {data.lastname}</h1>
            <button onClick={changeLastName}>change lastName</button>
            <h1>my age is {data.age}</h1>
            <button onClick={changeAge}>change age</button>
        </div>
    )
}

export default ComponentOne