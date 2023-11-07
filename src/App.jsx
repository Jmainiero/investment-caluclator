import { useState } from 'react'

import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

import { calculateInvestmentResults } from './util/investment'

const INITIAL_INVESTMENT = {
  'initialInvestment': 1500,
  'annualInvestment': 1200,
  'expectedReturn': 6,
  'duration': 10,
}

function App() {
  const [investment, setInvestment] = useState(INITIAL_INVESTMENT)
  const results = calculateInvestmentResults(investment)

  const validInput = investment.duration >= 1

  const handleInvestmentChange = (type, value) => {
    setInvestment(prevInvestment => {
      return {
        ...prevInvestment,
        [type]: 0
      }
    })
    setInvestment(prevInvestment => {
      return {
        ...prevInvestment,
        [type]: parseInt(value)
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput handleInvestmentChange={handleInvestmentChange} investment={investment} />
      {!validInput && <p className='center'>Please enter a duration greate than zero.</p>}
      {validInput && <Results results={results} />}
    </>
  )
}

export default App
