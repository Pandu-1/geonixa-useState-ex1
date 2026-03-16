import React, { useState } from 'react'

const UseStateToDoList = () => {



  const [list, setList] = useState([])



  const [message, setMessage] = useState({ text: '', id: "" })


  const changeMessage = (e) => {
    setMessage({
      ...message, text: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString()
    }
    setList([...list, newTodo])
    setMessage({ text: "", id: "" })

  }

  const handleDelete = (id) => {
    let newTodos = list.filter((eachObi) => {
      return eachObi.id !== id;
    })
    setList(newTodos);
  }


  return (
    <div>
      <form style={{ textAlign: 'center' }} >
        <input type='text'
          name="message"
          id="message"
          placeholder='enter text'
          value={message.text}
          onChange={changeMessage} />

        <button onClick={handleSubmit} type='submit'>add</button>

      </form>
      <hr />
      {list.length === 0 && <h4>the list is empty</h4>}
      <ul>
        {
          list.map((eachObi) => {
            const { text, id } = eachObi
            return <li key={id}>
              <span>{text}</span>
              <button>add</button>
              <button onClick={() => handleDelete(id)}>delete</button>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default UseStateToDoList