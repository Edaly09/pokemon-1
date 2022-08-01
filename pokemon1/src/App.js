import { useState } from "react";

const App = () =>{
const [pokemon, setpokemon] = useState(null)
 const useEffect = (()=>{
setpokemon("https://pokeapi.co/api/v2/pokemon/1")
console.log(pokemon);
},[])
const handleClick =()=>{
  useEffect()
}
  return(
    <>
  <h1>Bonjour pokemon</h1>
  <button onClick={handleClick}>click</button>
    </>
  )
}

export default App;
