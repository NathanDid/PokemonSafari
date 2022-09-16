import { PokemonType } from 'modules/game'
import * as gameSlice from '../modules/game'
import {
  all,
  call,
  put,
  takeLeading,
} from 'redux-saga/effects'
import { get, post } from '../apiClient'

function *sleep(time: any) {
  yield new Promise(resolve => setTimeout(resolve, time));
}

function* fetchPokemon({ payload: { location } }: gameSlice.FetchPokemonPayloadType) {
  try {
    console.log(location)
    const pokemon: PokemonType = yield call(get, `/pokemon?location=${location}`)

    yield all([
      put(gameSlice.setCurrentPokemon(pokemon)),
    ])
  } catch (error) {
    console.error(error)
  }
}

function* throwPokeball({ payload: { score, rate, location } }: gameSlice.ThrowPokeballPayloadType) {
  try {
    yield sleep(1000)

    const formData = new FormData()
    formData.append('score', score.toString())
    formData.append('rate', rate.toString())

    const success: boolean = yield call(post, `/pokeball`, formData)

    if (success) {
        yield all([
          put(gameSlice.throwPokeballSuccess()),
        ])

        try {
          const pokemon: PokemonType = yield call(get, `/pokemon?location=${location}`)
          yield all([
            put(gameSlice.setCurrentPokemon(pokemon)),
          ])
        } catch (error) {
        }
    } else {
      yield all([
        put(gameSlice.throwPokeballFailed()),
      ])
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
