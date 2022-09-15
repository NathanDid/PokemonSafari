import { throwPokeball } from "../modules/game"
import { useDispatch } from "react-redux"
import ActionButton from "./ActionButton"
import { useSelector } from "react-redux"
import { RootState } from "configureStore"
import PokeballButton from "./PokeballButton"

const Action = () => {
    const dispatch = useDispatch()
    const pokeballs = useSelector((state: RootState) => state.game.pokeballs)

    const handleThrowPokeball = () => {
        dispatch(throwPokeball())
    }

    return(
        <>
            <PokeballButton label="Pokeball" onClick={handleThrowPokeball} disabled={false} pokeballs={pokeballs}/>
            <ActionButton label="Caillou" disabled={true} />
            <ActionButton label="Appat" disabled={true} />
            <ActionButton label="Fuite" disabled={true} />
        </>
    )
}

export default Action