import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import gameReducer, { GameStateType } from './modules/game'

export type RootState = {
    game: GameStateType;
}

export const rootReducer = {
    game: gameReducer
}

export default function createStore(saga: any) {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => ([
      sagaMiddleware,
      ...getDefaultMiddleware()
    ])
  })

  sagaMiddleware.run(saga)

  return store
}