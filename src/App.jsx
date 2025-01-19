import './App.css'
import Square from './components/Square'

function Board() {
  return (
    <div className="container">
      <div className="row">
        <div className="board">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  )
}

export default Board
