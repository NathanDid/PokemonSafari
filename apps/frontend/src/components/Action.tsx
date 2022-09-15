import { fetchPokemon, throwPokeball } from "../modules/game"
import { useDispatch } from "react-redux"
import ActionButton from "./ActionButton"
import { useSelector } from "react-redux"
import { RootState } from "configureStore"
import PokeballButton from "./PokeballButton"
import NextButton from "./NextButton"

const Action = () => {
    const dispatch = useDispatch()
    const pokeballs = useSelector((state: RootState) => state.game.pokeballs)

    const handleThrowPokeball = () => {
        dispatch(throwPokeball())
    }

    const handleNextPokemon = () => {
        dispatch(fetchPokemon())
    }

    return(
        <>
            <PokeballButton label="Pokeball" onClick={handleThrowPokeball} disabled={false} pokeballs={pokeballs}/>
            <ActionButton label="Caillou" disabled={true} />
            <ActionButton label="Appat" disabled={true} />
            <NextButton label="Fuite" disabled={false} onClick={handleNextPokemon}/>
        </>
    )
}

export default Action