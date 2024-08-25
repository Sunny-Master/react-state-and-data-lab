import { useState } from "react"
import { Link } from "react-router-dom"
import "./Pokedex.css"
import { pokeData } from "../../data/pokeData"
import SearchForm from "../../components/SearchForm/SearchForm"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
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
  const [searchResults, setSearchResults] = useState([])

  const handlePokemonSearch = formData => {
    const filteredPokemonResults = pokeData.filter(pokemon => (
      pokemon.name.toLowerCase().includes(formData.query.toLowerCase())
    ))
    setSearchResults(filteredPokemonResults)
  }

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
      <SearchForm handlePokemonSearch={handlePokemonSearch}/>
      {!searchResults.length ?
        <> 
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
          <PokemonCard displayedPokemon={displayedPokemon}/> 
        </>
        :
        <>
          <PokemonCard displayedPokemon={searchResults}/> 
        </> 
      }
    </>
  )
}

export default Pokedex