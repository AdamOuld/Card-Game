import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'

function App() {

  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  return (
    <>
    <Header currScore={currScore} bestScore={bestScore}/>
    <Main currScore={currScore} bestScore={bestScore} setCurrScore={setCurrScore} setBestScore={setBestScore}/>
    </>
  )
}

export default App
