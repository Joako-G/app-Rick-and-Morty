import CharList from './Components/CharList'
import './App.css'
import { useEffect, useState } from 'react'
import { getCharacters } from './Services/service'

function App () {
  const [charList, setCharList] = useState([])

  useEffect(() => {
    getCharacters()
      .then(data => {
        setCharList(data.results)
        console.log('Entra')
      })
      .catch(err => console.log('Error', err))
  }, [])

  return (
    <div>
      <CharList charList={charList} />
    </div>
  )
}

export default App
