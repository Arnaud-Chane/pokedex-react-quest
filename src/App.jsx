import React from 'react'
import './app.css'
import PokemonCards from './components/PokemonCards/PokemonCards'
import Avatar from './components/Avatar/Avatar'


const App = () => {
  return(
    <div className="App">
      <PokemonCards />
    </div>
  )
}

export default App;