import ActionButton from "./ActionButton"

type Props = {
    label: string,
    disabled: boolean,
    onClick?: () => void,
    pokeballs?: number
}

const PokeballButton = ({ disabled, onClick, label, pokeballs }: Props) => {
    const hasAvailablePokeball = pokeballs > 0;
    return(
        <ActionButton
            label={label += ` (${pokeballs})`}
            disabled={disabled || !hasAvailablePokeball}
            onClick={onClick}
            title={!hasAvailablePokeball ? 'Plus de pokeball disponible, veuillez en acheter de nouvelles au magasin' : ''}
        />
    )
}

export default PokeballButton