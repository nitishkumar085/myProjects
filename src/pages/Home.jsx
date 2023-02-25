import { useEffect, useState } from "react"
import Card from "../components/Card"
import SearchBar from "../components/SearchBar"

function Home()
{
    const [apiData,setApiData] = useState([])
    const[copyData,setCopyData] =useState([])
    useEffect(()=>{
        async function fetchData()
        {
            const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=29b9d662eda4cb4c2722b797b8673c36")
            const response = await res.json()
            const data = response
            console.log(data)
            setApiData([...data.results])
            setCopyData([...data.results])
        }
        fetchData()
    },[])


        const list = copyData.map((val)=>{
            return (<Card key={val.id} data={val}/>)
        })


    return(
        <div>
            <SearchBar movieData={apiData} setCopyData={setCopyData}/>
            <div style={{display:"flex",flexWrap:"wrap",gap:"20px",justifyContent:"space-around",alignItems:"center"}}>
            {list}
            </div>
            
        </div>
    )
}

export default Home