import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Section = ({title}) => (
  <h1>
    {title}
  </h1>
)

const Button = ({onclick, text}) => (
  <button onClick={onclick}>{text}</button>
)



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <Section title='give feedback' />
      <Button onclick={handleGoodClick} text='good' />
      <Button onclick={handleNeutralClick} text='neutral' />
      <Button onclick={handleBadClick} text='bad' />
      <Section title='stats' />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>average {(good-bad)/(good+neutral+bad)}</p>
      <p>positive {(good/(good+neutral+bad))*100} %</p>
      
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

