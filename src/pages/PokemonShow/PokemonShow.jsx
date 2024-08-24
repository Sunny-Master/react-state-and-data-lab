import { useParams } from 'react-router-dom'
import './PokemonShow.css'
import { pokeData } from '../../data/pokeData'

const PokemonShow = () => {
  const {pokeId} = useParams()
  const pokemon = pokeData[pokeId]
  console.log(pokemon) 

  return ( 
  <>
    <div className='pokemon-card'>
      <h1 className='name'>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
    </div>
  </>
)
}

export default PokemonShow