import React,{useState,useEffect} from 'react'
import axios from 'axios'



const Card = () => {

    const [contador, setContador] = useState(1);
    const [name, setName] = useState("");
    const [imagen, setImagen] = useState("")
    const [planet, setPlanet] = useState("")

    const url = "https://rickandmortyapi.com/api"
    const characters = "/character"
    
    useEffect(()=>{
        axios.get(url + characters + "/" + contador)
        .then(res=> 
        {
            setName(res.data.name);
            setImagen(res.data.image);
            setPlanet(res.data.location.name)
        }
        )},[contador])

    const handleClickCharacter = ()=>{
    setContador(prevContador => prevContador + 1);
    }
    return (
        <>
    <div>
        <h2>{name}</h2>
        <h2>{planet}</h2>
        <img src={imagen} alt={name} />
    </div>
        <button type="click" onClick={handleClickCharacter}>Haz Click para cambiar personaje</button>
        </>
    )
}

export default Card