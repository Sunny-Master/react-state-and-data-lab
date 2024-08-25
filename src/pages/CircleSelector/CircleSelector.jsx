import { useState } from "react"
import './CircleSelector.css'
import Circles from "../../components/Circles/Circles"
import Selectors from "../../components/Selectors/Selectors"

const CircleSelector = () => {
  // state is initialized as false for all circles
  // you'll write code to change the selected index to true on click
  const [selections, setSelections] = useState([false, false, false, false])

  function handleSelection(selectedIdx) {
    const newSelection = selections.map((selection, idx) => 
      idx === selectedIdx ? true : false
    )
    setSelections(newSelection)  
  }

  return ( 
    <main>
      <Circles handleSelection={handleSelection} selections={selections} />
      <Selectors handleSelection={handleSelection} selections={selections} />
    </main>
  )
}

export default CircleSelector