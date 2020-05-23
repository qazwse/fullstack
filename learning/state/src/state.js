import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const History = (props) => {
  if  (props.allClicks.length === 0) {
    return (
      <div> 
        the app is used by pressing buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {    
    setAll(allClicks.concat('L'))    
    setLeft(left + 1)  
  }

  const handleRightClick = () => {    
    setAll(allClicks.concat('R'))    
    setRight(right + 1)  
  }

  const resetToZero = () => {
    setAll([])
    setLeft(0)
    setRight(0)
  }

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left'/>
        <Button onClick={handleRightClick} text='right'/>
        {right}
        <History allClicks={allClicks} />
        <Button onClick={resetToZero} text='reset' />
        </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))