import { all, fork } from 'redux-saga/effects'
import game from './effects/game'

const effects = function* () {
  yield all([
    fork(game),
  ])
}

export default effects
