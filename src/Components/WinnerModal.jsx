const WinnerModal = ({ lifes, winner, isStartGame, startGame }) => {
  if (isStartGame === 'start') return null
  const winnerText = winner === true && lifes > 1 ? 'Winner' : 'Lost'

  const handleClick = () => {
    startGame()
  }

  return (
    <>
      <section className='winner'>
        <div className='text'>
          <h2 className='winnerText'> {winnerText} </h2>
          <footer>
            <button onClick={handleClick}>Empezar de nuevo</button>
          </footer>
        </div>
      </section>
    </>
  )
}

export default WinnerModal
