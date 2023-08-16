import { useState } from "react";

const Header = ({name}) => {
  return <h1>{name}</h1>;
}

const Button = ({onClick, txt}) => {
  <button onClick={onClick}>
    {txt}
  </button>
}

const App = () => {
  const [clicksAll, setClicksAll] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    setClicksAll({...clicksAll, good: clicksAll.good + 1})
  }

  const handleNeutralClick = () => {
    setClicksAll({...clicksAll, neutral: clicksAll.neutral + 1})
  }

  const handleBadClick = () => {
    setClicksAll({...clicksAll, bad: clicksAll.bad + 1})
  }

  return (
    <div>
      <Header name="Customer feedback" />
      <Button txt="good" onClick={handleGoodClick} />
      <Button txt="neutral" onClick={handleNeutralClick} />
      <Button txt="bad" onClick={handleBadClick} />
      <Header name="statistics" />
    </div>
  )
}

export default App