import {useLocation} from 'react-router-dom'

function Details()
{
    const location = useLocation()
    const {state} = location
    return(
        <div style={{display:"flex",justifyContent:'space-around',alignItems:"center",height:"100vh",flexWrap:"wrap"}}>
            <div style={{width:"70%",display:"flex",border:"2px solid red",height:"70%"}}>
                <div style={{width:"50%"}}>
                <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} style={{width:"100%",height:"100%"}} alt='...'/>
                </div>
                <div style={{width:"50%",padding:"20px"}}>
                    <h3>{state.original_title}</h3>
                    <h5 style={{wordBreak:"break-all"}}>{state.overview}</h5>
                    <p>{state.release_date}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Details