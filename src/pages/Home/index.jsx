import { useEffect, useState } from "react"
import api from '../../services/api'

//URL DA API: https://api.themoviedb.org/3/movie/popular?api_key=034ab4707e90adc0815559e5687082e1&language=pt-BR

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

            console.log(response.data)
        }

        loadFilmes()
    },[])
   
    return(
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}
export default Home