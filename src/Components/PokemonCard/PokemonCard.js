import React from 'react'
import { Card, PokemonName, PokemonType, EvolveButton } from './styles'



const PokemonCard = (props) => {

  // const evoluirPokemon = () => {
  //     console.log("Cliquei no botão de evoluir")
  // }

  return (
    <Card color={props.color}>
      <img src={props.image} alt={`Pokemon`} />
      <PokemonName>{props.name}</PokemonName>
      <PokemonType>{props.type}</PokemonType>
      <p>{props.weight}kg</p>

      <EvolveButton onClick={props.evoluir}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard