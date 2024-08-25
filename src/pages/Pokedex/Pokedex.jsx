import { useState } from "react"
import { Link } from "react-router-dom"
import "./Pokedex.css"
import { pokeData } from "../../data/pokeData"
console.log(pokeData)


const Pokedex = () => {
  const displayCount = 10
  const [currIdx, setCurrIdx] = useState(0)
  
  const filterPokemonData = (newIdx) => {
    return (pokeData.filter((pokemon,idx) => 
      idx >= newIdx && idx < newIdx + displayCount
    ))
  }

  const [displayedPokemon, setDisplayedPokemon] = useState(filterPokemonData(0))

  const handleNextPage = () => {

    if (currIdx + displayCount > pokeData.length) {
      return
    } 
    setCurrIdx(currIdx + displayCount)
    setDisplayedPokemon(filterPokemonData(currIdx + displayCount))
  }

  const handlePrevPage = () => {
    if (!currIdx) {
      return
    }
    setCurrIdx(currIdx - displayCount)
    setDisplayedPokemon(filterPokemonData(currIdx - displayCount))
  }

  return ( 
    <>
      <h1>Pokemon List</h1>
      <div className="pagination-container">
        <button onClick={handlePrevPage}>&lt;</button>
        <button onClick={handleNextPage}>&gt;</button>
      </div>
      <div className="num-results-container">
        Results {currIdx + 1} - {
          (currIdx + displayCount) > pokeData.length ? 
          `${pokeData.length}` 
          : 
          `${currIdx + displayCount}`
        } of {pokeData.length}
      </div>
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
    </>
  )
}

export default Pokedex