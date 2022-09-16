import { fetchPokemon, rateSelector, scoreSelector, throwPokeball, buyPokeball, locationSelector } from "../modules/game"
import { useDispatch } from "react-redux"
import ActionButton from "./ActionButton"
import { useSelector } from "react-redux"
import { RootState } from "configureStore"
import PokeballButton from "./PokeballButton"
import NextButton from "./NextButton"
import BuyButton from "./BuyButton"
import Pokeball from "./Pokeball"
import styled from "styled-components"

const Action = () => {
    const dispatch = useDispatch()
    const pokeballs = useSelector((state: RootState) => state.game.pokeballs)
    const score = useSelector(scoreSelector)
    const rate = useSelector(rateSelector)
    const location = useSelector(locationSelector)

    const handleNextPokemon = () => {
        dispatch(fetchPokemon({location}))
    }

    const handleClick = () => {
        dispatch(throwPokeball({score, rate, location}))
    }

    const handleBuyPokeball = () => {
        dispatch(buyPokeball())
    }

    return(
        <ActionPanel>
            <Pokeball isThrown={false}></Pokeball>

            <div className="actions">
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
            </div>
        </ActionPanel>
    )
}

const ActionPanel = styled.div`
    .actions {
        display: flex;
        flex-wrap: wrap;
        background: rgba(255, 255, 255, .6);
        margin: 0 0 40px;
    }

    .actions button {
        width: 100%;
        flex: 40%;
        font-size: 20px;
    }
`;

export default Action