import { useState } from "react"
import "./Pokedex.css"
import { pokeData } from "../../data/pokeData"
import SearchForm from "../../components/SearchForm/SearchForm"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
console.log(pokeData)


const Pokedex = () => {
  const [currIdx, setCurrIdx] = useState(0)
  const [displayCount, setDisplayCount] = useState(10)

  const filterPokemonData = (newIdx, displayCount) => {
    return (pokeData.filter((pokemon,idx) => 
      idx >= newIdx && idx < newIdx + displayCount
    ))
  }
  const [displayedPokemon, setDisplayedPokemon] = useState(filterPokemonData(0, 10))
  
  const [searchResults, setSearchResults] = useState([])

  const handlePokemonSearch = formData => {
    const filteredPokemonResults = pokeData.filter(pokemon => (
      pokemon.name.toLowerCase().includes(formData.query.toLowerCase())
    ))
    setSearchResults(filteredPokemonResults)
  }

  const selectedDisplayCount = (e) => {
    const newDisplayCount = parseInt(e.target.value)
    setDisplayCount(newDisplayCount)
    setDisplayedPokemon(filterPokemonData(currIdx + newDisplayCount, newDisplayCount))
  }
  
  const handleNextPage = () => {

    if (currIdx + displayCount > pokeData.length) {
      return
    } 
    setCurrIdx(currIdx + displayCount)
    setDisplayedPokemon(filterPokemonData(currIdx + displayCount, displayCount))
  }

  const handlePrevPage = () => {
    if (!currIdx) {
      return
    }
    setCurrIdx(currIdx - displayCount)
    setDisplayedPokemon(filterPokemonData(currIdx - displayCount, displayCount))
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
          <div className="select-display-count">
            <select name="displayCount" value={displayCount} onChange={selectedDisplayCount}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            Results per page
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