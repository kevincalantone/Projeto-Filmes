import { useEffect, useState } from "react"
import api from '../../services/api'
import { Link } from "react-router-dom"
import './home.css'

//URL DA API: https://api.themoviedb.org/3/movie/popular?api_key=5669892fa7499bf0695df928b9511546&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([])
   
    useEffect(() =>{
        async function loadFilmes() {
            const response = await api.get("movie/popular", {
                params:{
                    api_key: "5669892fa7499bf0695df928b9511546",
                    language: "pt-BR",
                    page: 1,
                }
            })

           // console.log(response.data.results.slice(0,10))
           setFilmes((response.data.results.slice(0,10)))
        }

        loadFilmes()
    },[])
   
    return(
        <div className="container">
            
            <div className="lista-filmes">
              
              {filmes.map((filmes) =>{
                return(
                    <article key={filmes.id}>
                        <strong>{filmes.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`} alt="{filme.title" />
                         <Link to={`/filmes/${filmes.id}`}>Acessar</Link>
                    </article>
                )
              })}  
            
            </div>
            
        </div>
    )
}
export default Home