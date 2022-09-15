import { createStore } from 'redux'
import { rootReducer } from './modules';

import {
  reducer as poke,
  State as GameState
} from './modules/poke'

export type RootState = {
  game: PokeState;
}

export const configureStore =  () => {
  const store = createStore(
    rootReducer,
  )

  return store
}

export default configureStore