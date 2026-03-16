import React, { useState } from 'react'



const ComponentThree = () => {

  const [showData, setShowData] = useState(false)

  const hideData=()=>{
    setShowData(!showData)
  }


  return (
    <div style={{alignItems:'center',textAlign:'center'}}>

      <button onClick={hideData} >{showData ?"hide" : "show"}</button>

      {
        showData ? (
          <div>Lorem ipsum dolor sit amet
            consectetur <br />adipisicing elit.
            Repudiandae, odio?
          </div>
        ):(<h3>data is hidden</h3>)
      }
    </div>
  )
}

export default ComponentThree