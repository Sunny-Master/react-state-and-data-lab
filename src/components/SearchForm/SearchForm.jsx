// npm modules
import { useState } from "react"

// css
import './SearchForm.css'

const SearchForm = ({handlePokemonSearch}) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    const copyFormData = {...formData, [evt.target.name]: evt.target.value}
    setFormData(copyFormData)
    handlePokemonSearch(copyFormData)

  }

  return (
    <form className="search-form" >
      <input 
        type="text" 
        name="query" 
        autoComplete="off" 
        placeholder="Search"
        value={formData.query}
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchForm