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

const Statistic = ({value, text}) => (
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>
)

const Statistics = ({good,neutral,bad}) => {
  if (good > 0 || neutral > 0 || bad > 0) {

    const total = good+neutral+bad

    return(
      <table>
        <tbody>
        <Statistic value={good} text="good" />
        <Statistic value={neutral} text="neutral" />
        <Statistic value={bad} text="bad" />
        <Statistic value={total} text="all" />
        <Statistic value={(good-bad)/total} text="average" />
        <Statistic value={Number((good/total)*100).toFixed(2) + " %"} text="positive" />
        </tbody>
      </table>
    )
  } else {
    return(<p>No feedback given</p>)
  }
  
}

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
      <Statistics good={good} neutral={neutral} bad={bad} />
      
      
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

