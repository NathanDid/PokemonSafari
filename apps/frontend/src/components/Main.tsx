import Action from './Action'
import Encounter from './Encounter'
import { useSelector } from "react-redux"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPokemon, loadingPokemonSelector,isLoadingPokemon, ownedPokemonsSelector, scoreSelector } from '../modules/game'
import styled from 'styled-components';
import Inventory from './Inventory'
import State from './State'

const Div = styled.div`
    .game {
        width: 600px;
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
  const score = useSelector(scoreSelector)

  useEffect(() => {
    dispatch(fetchPokemon())
  }, [])

  return(
    <Div>
        <div className="game">
            <Encounter currentPokemon={currentPokemon} isLoading={loadingPokemon}/>
            <Action />
            <Inventory ownedPokemons={ownedPokemons}/>
            <State score={score}/>
        </div>
    </Div>
  )
}

export default Main