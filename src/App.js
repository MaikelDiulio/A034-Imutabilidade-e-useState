import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })


  const [pokemon2, setPokemon2] = useState({
    ...pokemon,
    color: "blue",
    name: "CHARMANDER",
    weight: "8.5",
    image: "https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"

  })


  function EvoluirPokemon2() {
    const evolucao2 = {
      ...pokemon,
      color: "blue",
      name: "CHARMALEON",
      weight: "19",
      image: "https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png"
    }

    setPokemon2(evolucao2)

  }


  function EvoluirPokemon1() {
    const evolucao = {
      ...pokemon,
      color: "pink",
      name: "PIKACHU",
      weight: "6",
      image: "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png"
    }

    setPokemon(evolucao)


  }





  // Para fazer seus próximos pokemons, crie novos estados!

  return (<>
    <GlobalStyles />
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
        evoluir={EvoluirPokemon1} name={pokemon.name} type={pokemon.type} evolved={pokemon.evolved}
        weight={pokemon.weight} color={pokemon.color} image={pokemon.image}


      />

      <PokemonCard
        evoluir={EvoluirPokemon2} name={pokemon2.name} type={pokemon2.type} evolved={pokemon2.evolved}
        weight={pokemon2.weight} color={pokemon2.color} image={pokemon2.image}
      />
      {/* Crie aqui seus próximos pokemons! */}

    </FlexContainer>
  </>

  );
}

export default App;
