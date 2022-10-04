import { configureStore } from '@reduxjs/toolkit'
import gameReducer, { GameStateType } from './modules/game'

export type RootState = {
    game: GameStateType;
}

export const rootReducer = {
    game: gameReducer
}

export default function createStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => ([
      ...getDefaultMiddleware()
    ])
  })

  return store
}