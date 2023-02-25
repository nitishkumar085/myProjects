import { useEffect, useState } from "react"

function SearchBar({movieData,setCopyData})
{
        const[query,setQuery] = useState("")

        useEffect(()=>{
           
           if(query){
           
            const newData = movieData.filter(val=>{return val.title?.toLowerCase().includes(query)})
            setCopyData(newData)
           }
           else if(query===""){
            setCopyData(movieData)
           }
            
        },[query,movieData,setCopyData])
    const inputHandler=(e)=>{
        setQuery(e.target.value)
        
    }
    return(
        <div style={{height:"100px",display:"flex",justifyContent:'center',alignItems:'center'}} >
            <input type="search" placeholder='search movies' style={{width:"50%",textAlign:"center"}} onChange={inputHandler}/>
        </div>
    )
}

export default SearchBar