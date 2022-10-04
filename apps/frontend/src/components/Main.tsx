import Action from './Action'
import Encounter from './Encounter'
import LocationList from './LocationList'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import {
  locationSelector,
  setCurrentPokemon
} from '../modules/game'
import styled from 'styled-components';
import Inventory from './Inventory'
import State from './State'
import Audio from './Audio'
import { usePokemonQuery } from './pokemon.hooks'
import { useEffect } from 'react'

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
  const location = useSelector(locationSelector)

  const dispatch = useDispatch()
  const {
      data, loading, error, refetch
  } = usePokemonQuery({variables: {location: location}})

  useEffect(() => {
    if (!loading) dispatch(setCurrentPokemon(data.pokemon))
  }, [data])

  return (
    <Div>
        <div className={location + ' game'}>
            <div className='content'>
                <Encounter/>
                <LocationList refetchPokemon={refetch}/>
            </div>

            <Action refetchPokemon={refetch}/>
            <Inventory/>
            <State/>
            <Audio/>
        </div>
    </Div>
  )
}

export default Main