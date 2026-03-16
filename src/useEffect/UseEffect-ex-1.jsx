import React, { useEffect ,useState} from 'react'


const URL="https://jsonplaceholder.typicode.com/users";
 
  const PracticeUseEffect=()=>{

    const [userData,setUserData]=useState([]);
    const [loading,setloading]=useState(false);// ekkada data ochemundhu data loading ani print cheyadaniki set loading vadatham
    const [iserror,setIserror]=useState({status:false,msg:" "})


    const fetchUserData= async(apiURl)=>{
        // ekkada data kanipinchadaniki set loading true use chesthunnam
        setloading(true)
        setIserror({status:false,msg:" "})// by default emi error ledhu ani cheppataniki false use chesthummam
        try {
            const response= await fetch(apiURl);
        const data=await response.json()
        setUserData(data);
        setloading(false) //ekkada emina data ochinatarvatha false chesthunnam inka oddu ani
        setIserror({status:false,msg:" "})//ekkada kooda emi error ledhu ani cheppadaniki false use chesam
        if (response.status===404){
            throw new Error("data not found")//ekkada okavela data lekapothe e case lo maname error ni throw chesthumma kavalani 
        }
        } catch (error) {
            console.log(error.message);
            
            setloading(false)
            setIserror({status:true,msg: error.message ||"something went wrong please try again "})//okavela paina try lo problem osthe kindha catch loki vastundhi
            // ekkada code fail aithe emaithe error ostadho aa error ni print chestham or  
            // adhi kakapothe ||>pakkana code left lo unna or operator tho print chestham
        }

    }

    useEffect(()=>{
        fetchUserData(URL)
    },[])


    if (loading){
        return(
            <div>
                <h1>loading please wait</h1>
            </div>
        )
    }

    if (iserror?.status){
        return(
            <div>
                <h1>{iserror?.msg}</h1>
            </div>
        )
    }

    return(
        <div>
            <h1>useEffect Example One</h1>
           <ul>
              {
                userData.map((eachUser) => {
                    const {id,name,email} = eachUser;

                    return (
                      <li key={id}>
                          <div>{name}</div>
                          <div>{email}</div>
                      </li>
                    )
                })
              }
          </ul>



          
        </div>
    )
  }


export default PracticeUseEffect