import { useState } from 'react'

const Button_Render = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <div>{text}: {value} </div>
)

const Statistics = (props) => {
  if (props.all === 0){

    return <div>No feedback given</div>;
  }
  
  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text={ "good"} value={props.good}></StatisticLine>
        </tr>
        <tr>
          <StatisticLine text={ "neutral"} value={props.neutral}></StatisticLine>
        </tr>
        <tr>
          <StatisticLine text={ "bad"} value={props.bad}></StatisticLine>
        </tr>
        <tr>
          <StatisticLine text={ "all"} value={props.all}></StatisticLine>
        </tr>
        <tr>
          <StatisticLine text={ "Average"} value={props.average}></StatisticLine>
        </tr>
         <tr>
          <StatisticLine text={ "Positive"} value={props.positive + "%" || 0}></StatisticLine>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const calcAverage = () => {
    if (all > 0) {
      setAverage((good*1 + bad * -1)/all);
      
    }
    else {
      setAverage(0);
    }
  };

  const calcPositive = () => {
    setPositive((good/all)*100)
  }

  const clickGood = () => {
    setGood(good + 1)
    setAll(all+1)
    calcAverage()
    calcPositive()
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all+1)
    calcAverage()
    calcPositive()
  }

  const clickBad = () => {
    setBad(bad + 1)
    setAll(all+1)
    calcAverage()
    calcPositive()
  }

  return (
    <div>
      <h3>Give feedback</h3>
      <Button_Render handleClick={clickGood} text={"good"}></Button_Render>
      <Button_Render handleClick={clickNeutral} text={"neutral"}></Button_Render>
      <Button_Render handleClick={clickBad} text={"bad"}></Button_Render>
      <h3>Statistics</h3>
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        all = {all}
        average={average}
        positive={positive}></Statistics>
    </div>
  )
}

export default App