import React from 'react'
import './pokemonCards.css'

const PokemonCards = () => {

  return (
    <div className="pkm-cards-ctn">
      <figure>
        <img src="https://www.pokebip.com/pokedex-images/300/1.png?v=ev2"
            alt="Bulbasaur" />
        <figcaption>Bulbasaur</figcaption>
      </figure>
    </div>
  )
}

export default PokemonCards;