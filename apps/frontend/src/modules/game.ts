const THROW_POKEBALL = 'poke::THROW_POKEBALL'

export type State = {
    score: number;
    pokeballs: number;
}

const initialState: State = {
    score: 0,
    pokeballs: 20
}

export const throwPokeball = () => ({ type: THROW_POKEBALL })

type Action = ThrowPokeballAction

type ThrowPokeballAction = {
  type: typeof THROW_POKEBALL;
}

export const reducer = (state: State = initialState, action: Action) => {
    if (action.type === THROW_POKEBALL) {
        return {
            ...state,
            pokeballs: state.pokeballs - 1
        }
    }

    return state
}