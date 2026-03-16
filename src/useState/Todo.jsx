import React, { useState } from 'react'



const Todo = () => {

    

    const [data, setData] = useState([])
    const [message, setMessage] = useState({
        text: '', id: ''
    })

    const changeMessage = (e) => {
        setMessage({...message,text:e.target.value})
    }
    const addText=(e)=>{
        e.preventDefault()
        let newText={
            text:message.text,
            id: new Date().getTime().toString()
        }
        setData([...data,newText])
        setMessage({text:"",id:""})
            
    }
    const deleteData=(id)=>{
      let newList=  data.filter((eachData)=>{
        return eachData.id!==id
        })
        setData(newList)
    }

    return (
        <div>
            <form style={{ textAlign: 'center' }}>
                <input type="text"
                    name='message'
                    id='message'
                    placeholder='type something'
                    value={message.text}
                    onChange={changeMessage}
                />
                <button onClick={addText}>add</button>
            </form>
            <hr />
            {data.length===0 && <h1>the list is empty</h1>}
            <ul style={{textAlign:'center',listStyleType:'none'}}>
                {
                    data.map((eachData) => {
                        const{text,id}=eachData
                        return<li key={id}>
                            <span>{text}</span>
                            <button onClick={()=>deleteData(id)}>delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todo