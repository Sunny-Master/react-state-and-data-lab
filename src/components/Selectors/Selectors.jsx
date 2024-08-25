import './Selectors.css'

const Selectors = (props) => {
  return (
    <div className="selector">
      {props.selections.map((selection, idx) =>
        <button 
          key={idx}
          onClick={() => props.handleSelection(idx)}
          className={selection ? 'selected' : ''}
        >
          Button {idx + 1}
        </button>
      )}
    </div>
  )
}

export default Selectors