import { combineReducers } from 'redux'
import { reducer as game, State as GameState } from './game'

export type RootState = {
    game: GameState
}

export const rootReducer = combineReducers({
  game
})