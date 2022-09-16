import Action from './Action'
import Encounter from './Encounter'
import LocationList from './LocationList'
import { useSelector } from "react-redux"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  fetchPokemon,
  loadingPokemonSelector,
  isLoadingPokemon,
  ownedPokemonsSelector,
  scoreSelector,
  shakePokemonSelector,
  locationSelector
} from '../modules/game'
import styled from 'styled-components';
import Inventory from './Inventory'
import State from './State'
import Audio from './Audio'

const Div = styled.div`
    .game {
        width: 600px;
        text-align: center;
        margin: 0 auto;
        border: 3px solid black
    }

    .beach {
        background: url('beach.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .city {
        background: url('city.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .volcano {
        background: url('volcano.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
    }

    .city h1, .volcano h1, .volcano ul li, .city ul li, .city .score, .volcano .score {
        color: white;
    }

    .plains {
        background: url('plains.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .mountains {
        background: url('mountains.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .content {
        display: flex;
    }

    .content {
        > div {
            flex: 40%;
        }
    }
`;

const Main = () => {
  const dispatch = useDispatch()
  const currentPokemon = useSelector(loadingPokemonSelector)
  const loadingPokemon = useSelector(isLoadingPokemon)
  const ownedPokemons = useSelector(ownedPokemonsSelector)
  const score = useSelector(scoreSelector)
  const shakePokemon = useSelector(shakePokemonSelector)
  const location = useSelector(locationSelector)

  useEffect(() => {
    dispatch(fetchPokemon({location}))
  }, [])

  return (
    <Div>
        <div className={location + ' game'}>
            <div className='content'>
                <Encounter currentPokemon={currentPokemon} isLoading={loadingPokemon} shakePokemon={shakePokemon}/>
                <LocationList/>
            </div>
            <Action />
            <Inventory ownedPokemons={ownedPokemons}/>
            <State score={score}/>
            <Audio/>
        </div>
    </Div>
  )
}

export default Main