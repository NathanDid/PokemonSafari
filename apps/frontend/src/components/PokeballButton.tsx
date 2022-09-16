import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isPokeballThrownSelector, locationSelector, rateSelector, scoreSelector, throwPokeball } from "../modules/game";
import ActionButton from "./ActionButton"

type Props = {
    label: string,
    disabled: boolean,
    onClick: (score: number, rate: number) => void,
    pokeballs?: number
}

const PokeballButton = ({ disabled, label, pokeballs }: Props) => {
    const hasAvailablePokeball = pokeballs > 0;
    const score = useSelector(scoreSelector)
    const rate = useSelector(rateSelector)
    const isPokeballThrown = useSelector(isPokeballThrownSelector)
    const location = useSelector(locationSelector)

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(throwPokeball({score, rate, location}))
    }

    return(
        <ActionButton
            label={label += ` (${pokeballs})`}
            disabled={disabled || !hasAvailablePokeball || isPokeballThrown}
            onClick={handleClick}
            title={!hasAvailablePokeball ? 'Plus de pokeball disponible, veuillez en acheter de nouvelles au magasin' : ''}
        />
    )
}

export default PokeballButton