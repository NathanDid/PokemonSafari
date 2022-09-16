import { useSelector } from "react-redux";
import ActionButton from "./ActionButton"
import { pokeballPrice, scoreSelector } from "../modules/game"


type Props = {
    label: string,
    disabled: boolean,
    onClick?: () => void,
    price: number
}

const BuyButton = ({ onClick, label}: Props) => {

    const score = useSelector(scoreSelector)
    const isDisabled = () => {
        return score < pokeballPrice;
    }

    return(
        <ActionButton
            label={label}
            disabled={isDisabled()}
            onClick={onClick}
        />
    )
}

export default BuyButton