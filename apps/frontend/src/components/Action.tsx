import { fetchPokemon, rateSelector, scoreSelector, throwPokeball, buyPokeball } from "../modules/game"
import { useDispatch } from "react-redux"
import ActionButton from "./ActionButton"
import { useSelector } from "react-redux"
import { RootState } from "configureStore"
import PokeballButton from "./PokeballButton"
import NextButton from "./NextButton"
import BuyButton from "./BuyButton"

const Action = () => {
    const dispatch = useDispatch()
    const pokeballs = useSelector((state: RootState) => state.game.pokeballs)
    const score = useSelector(scoreSelector)
    const rate = useSelector(rateSelector)

    const handleNextPokemon = () => {
        dispatch(fetchPokemon())
    }

    const handleClick = () => {
        dispatch(throwPokeball({score, rate}))
    }

    const handleBuyPokeball = () => {
        dispatch(buyPokeball())
    }

    return(
        <>
            <p>{score}</p>
            <PokeballButton
                label="Pokeball"
                onClick={handleClick}
                disabled={false} pokeballs={pokeballs}
            />
            <ActionButton
                label="Caillou"
                disabled={true}
            />
            <BuyButton
                label="Acheter pokéball"
                disabled={false}
                price={20}
                onClick={handleBuyPokeball}
            />
            <NextButton
                label="Fuite"
                disabled={false}
                onClick={handleNextPokemon}
            />
        </>
    )
}

export default Action