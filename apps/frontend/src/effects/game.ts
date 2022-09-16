import { PokemonType } from 'modules/game'
import * as gameSlice from '../modules/game'
import {
  all,
  call,
  put,
  takeLeading,
} from 'redux-saga/effects'
import { get, post } from '../apiClient'

function* fetchPokemon() {
  try {
    const pokemon: PokemonType = yield call(get, `/pokemon`)

    yield all([
      put(gameSlice.setCurrentPokemon(pokemon)),
    ])
  } catch (error) {
    console.error(error)
  }
}

function* throwPokeball({ payload: { score, rate } }: gameSlice.ThrowPokeballPayloadType) {
  try {
    const formData = new FormData()
    formData.append('score', score.toString())
    formData.append('rate', rate.toString())

    const success: boolean = yield call(post, `/pokeball`, formData)

    if (success) {
        const pokemon: PokemonType = yield call(get, `/pokemon`)
      yield all([
        put(gameSlice.addToInventory()),
        put(gameSlice.setCurrentPokemon(pokemon))
      ])
    } else {
      console.log('Catch failed')
    }
  } catch (error) {
    console.error(error)
  }
}

export default function* game() {
  yield takeLeading(gameSlice.fetchPokemon, fetchPokemon)
  yield takeLeading(gameSlice.throwPokeball, throwPokeball)
}
