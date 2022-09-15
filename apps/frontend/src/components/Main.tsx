import Action from './Action'
import Encounter from './Encounter'
import { useSelector } from "react-redux"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPokemon, loadingPokemonSelector,isLoadingPokemon } from '../modules/game'

const Main = () => {
  const dispatch = useDispatch()
  const currentPokemon = useSelector(loadingPokemonSelector)
  const loadingPokemon = useSelector(isLoadingPokemon)

  useEffect(() => {
    dispatch(fetchPokemon())
  }, [])

  return(
    <>
      <Encounter currentPokemon={currentPokemon} isLoadingPokemon={loadingPokemon}/>
      <Action />
    </>
  )
}

export default Main