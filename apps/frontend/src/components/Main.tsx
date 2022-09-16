import Action from './Action'
import Encounter from './Encounter'
import { useSelector } from "react-redux"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPokemon, loadingPokemonSelector,isLoadingPokemon, ownedPokemonsSelector } from '../modules/game'
import styled from 'styled-components';
import Inventory from './Inventory'

const Div = styled.div`
    .game {
        width: 600px;
        height: 800px;
        text-align: center;
        margin: 0 auto;
        border: 3px solid black
    }
`;

const Main = () => {
  const dispatch = useDispatch()
  const currentPokemon = useSelector(loadingPokemonSelector)
  const loadingPokemon = useSelector(isLoadingPokemon)
  const ownedPokemons = useSelector(ownedPokemonsSelector)

  useEffect(() => {
    dispatch(fetchPokemon())
  }, [])

  return(
    <Div>
        <div className="game">
            <Encounter currentPokemon={currentPokemon} isLoading={loadingPokemon}/>
            <Action />
            <Inventory ownedPokemons={ownedPokemons}/>
        </div>
    </Div>
  )
}

export default Main