import React from 'react'
import './pokemonCards.css'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://www.pokebip.com/pokedex-images/300/1.png?v=ev2"
  },
  {
    name: "mew",
  },
];

const PokemonCards = () => {

  const pkm = pokemonList[1];

  const pokemonDisplay = (item) => {
    if(!item.hasOwnProperty("imgSrc") || item.imgSrc === ""){
      return <p>???</p>;
    }else{
        return <img src={item.imgSrc}
        alt={item.name} />;
    }
  }

  return(
    <div className="pkm-cards-ctn">
      <figure>
        {pokemonDisplay(pkm)}
        <figcaption>{pkm.name}</figcaption>
      </figure>
    </div>
  );
}

export default PokemonCards;