import { useState,useEffect} from "react"
import React from 'react'



const URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const UseEffect3 = () => {

    const[drinksData,setDrinksData]=useState([]);
    const[searchTerm,setSearchTerm]=useState("")
    const[loading,setLoading]=useState(false)
    const[isError,setIsError]=useState({status:false ,msg:""})

    const fetchDrinks= async (apiURL)=>{
        setLoading(true)
        setIsError({status:false ,msg:""})
      try {
        
        const response = await fetch(apiURL);
        const {drinks} = await response.json();
        setDrinksData(drinks)
        setLoading(false)
        setIsError({status:false ,msg:""})

      } catch (error) {
        setLoading(false)
        setIsError({status:true ,msg: error.message ||"something went wrong.."})
      }
        
    }

    

useEffect(()=>{
    const correctURL=`${URL}${searchTerm}`
    fetchDrinks(correctURL);
},[searchTerm])

return(
<div>
    <h1>drinks count:{drinksData.length}</h1>
    <form>
        <input
        type="text"
        name="search"
        placeholder="please enter value"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
    </form>
    <hr/>
    {loading && !isError?.status&& <h3>please wait loading...</h3>}
    {isError?.status && <h1>{isError.msg}</h1>}
    {!loading && !isError?.status&&
        <ul>
        {
            drinksData.map((eachData)=>{
                const {idDrink,strDrink,strDrinkThumb}=eachData

               return <li key={idDrink}>

                    <div>
                        <img src={strDrinkThumb} alt="image" width="100"/>
                    </div>
                    <div>
                        <h3>{strDrink}</h3>
                    </div>
                </li>
            })
        }
    </ul>
    }

</div>
)


}

export default UseEffect3