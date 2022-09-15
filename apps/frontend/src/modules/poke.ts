const THROW_POKEBALL = 'poke::THROW_POKEBALL'

export type Item = {
    name: string,
    price: number,
    multiplier: number
}

export type State = {
    coins: number;
    ownedItems: Item[];
}

const initialState: State = {
    coins: 0,
    ownedItems: []
}

export const increment = () => ({ type: INCREMENT })
export const generateCoins = (coins: number) => ({ type: GENERATE_COIN, coins })
export const buyItem = (item: Item) => ({ type: BUY_ITEM, item })
export const loop = () => ({ type: LOOP })

type Action = IncrementAction | GenerateLinesAction | BuyItemAction

type IncrementAction = {
  type: typeof INCREMENT;
}

type GenerateLinesAction = {
  type: typeof GENERATE_COIN;
  coins: number;
}

type BuyItemAction = {
  type: typeof BUY_ITEM;
  item: Item;
}


export const reducer = (state: State = initialState, action: Action) => {
    if (action.type === INCREMENT) {
        return {
            ...state,
            coins: state.coins + 1
        }
    }

    if (action.type === GENERATE_COIN) {
        return {
            ...state,
            coins: state.coins + action.coins
        }
    }

    if (action.type === BUY_ITEM) {
        return {
            ...state,
            coins: state.coins - action.item.price,
            ownedItems: [...state.ownedItems, action.item]
        }
    }

    return state
}