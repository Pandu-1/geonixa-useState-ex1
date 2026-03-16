import React from "react";

import { useState } from "react";


function ComponentTwo(){

    const initialArray=[
        {
            id:"afjfh",
            firstName:"surya",
            lastName:"chowdary",
            age:21

        },
        {
            id:"fhkfj",
            firstName:"yashu",
            lastName:"reddy",
            age:18
        }
    ]

    const [data,setData]=useState(initialArray)
   
    
deleteData=(comeId)=>{
const filteredData=data.filter((eachItem)=>{
    return eachItem.id !==comeId;
})

setData(filteredData);

}

    return (
        <div>
            <ul>
                {
                    data.map((eachItem,index)=>{
                        const{firstName,lastName,age,id}=eachItem
                        return <li key={id}>
                            <div>firstName:{firstName}</div>
                            <div>lastName:{lastName}</div>
                            <div>age:{age}</div>
                            <button onClick={()=>deleteData(id)}>Delete me</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )

        

        

}

export default ComponentTwo