import {useNavigate} from 'react-router-dom'

function Card({data})
{
    const{poster_path,original_title} = data
    const navigate = useNavigate()

    const HandleClick=()=>{
        navigate(`/details/${original_title}`,{state:data})
    }
    return(
        <div className="card" style={{width: "18rem"}} onClick={HandleClick}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="card-img-top" alt="..." style={{width:"100%",height:"200px"}}/>
            <div className="card-body">
                <h5 className="card-title">{original_title}</h5>
            </div>
        </div>
    )
}
export default Card 