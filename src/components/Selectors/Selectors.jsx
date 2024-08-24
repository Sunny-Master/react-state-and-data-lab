import './Selectors.css'

const Selectors = (props) => {
  return (
    <div className="selector">
      {props.selections.map((selection, idx) =>
        <button 
          key={idx}
        >
          Button {idx + 1}
        </button>
      )}
    </div>
  )
}

export default Selectors