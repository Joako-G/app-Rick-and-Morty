import { useState } from 'react'
import confetti from 'canvas-confetti'
import Char from './Char'
import WinnerModal from './WinnerModal'

const getRandomNum = (max) => {
  if (max > 0) {
    return Math.floor(Math.random() * max)
  }

  return null
}

const CharList = ({ charList }) => {
  const [character, setCharacter] = useState(null)
  const [lifes, setLifes] = useState(3)
  const [winner, setWinner] = useState(false)
  const [isStartGame, setIsStartGame] = useState('start')

  const updateName = (name) => {
    if (character !== null) {
      if (lifes > 1) {
        if (name === character.name) {
          confetti()
          setWinner(true)
          setIsStartGame('end')
        } else {
          setLifes(lifes - 1)
        }
      } else {
        setIsStartGame('end')
      }
    }
  }

  const startGame = () => {
    setCharacter(charList[getRandomNum(charList.length)])
    setLifes(3)
    setWinner(false)
    setIsStartGame('start')
  }

  return (
    <main className='board'>
      <div className='page'>
        {character === null ? (<button onClick={startGame}>Comenzar Juego</button>) : (<h3> {character.name} </h3>)}
        {/* <img src={backgroundImage} alt='Imagen' /> */}
      </div>
      <div className='center'>
        {charList.map((char) => (
          <Char key={char.id} name={char.name} species={char.species} image={char.image} updateName={updateName} />
        ))}
      </div>

      <WinnerModal lifes={lifes} winner={winner} isStartGame={isStartGame} startGame={startGame} />

    </main>
  )
}

export default CharList
