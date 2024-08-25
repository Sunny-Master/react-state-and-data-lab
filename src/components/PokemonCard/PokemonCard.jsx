// npm modules
import { Link } from "react-router-dom"

const PokemonCard = ({displayedPokemon}) => {
  return (  
    <div className="pokemon-container">
      {displayedPokemon.map(pokemon => 
        <Link to={`/pokemon/${pokemon.number - 1}`} key={pokemon._id}>
          <div className="pokemon-link">
            <img src={pokemon.image} alt="a fierce pokemon" />
            <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>  
          </div>
        </Link>
      )}
    </div>
  )
}

export default PokemonCard