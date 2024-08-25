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
      <img src={pokemon.image} alt={pokemon.name} />
      <div className="type-container">
        <p className="grass name">grass</p>
        <p className="poison name">poison</p>
      </div>
      <p className="abilities-title">Abilities</p>
      <div className="abilities-container">
        <p className="ability">overgrow</p>
        <p className="ability">chlorophyll</p>
      </div>
    </div>
  </>
)
}

export default PokemonShow