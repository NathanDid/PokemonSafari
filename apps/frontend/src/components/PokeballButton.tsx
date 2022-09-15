import ActionButton from "./ActionButton"

type Props = {
    label: string,
    disabled: boolean,
    onClick?: () => void,
    pokeballs?: number
}

const getLabel = (label: string, pokeballs?: number) => {
    if (pokeballs) {
        label += ` (${pokeballs})`
    }

    return label
}

const PokeballButton = ({ disabled, onClick, label, pokeballs }: Props) => {
    return(
        <ActionButton label={getLabel(label, pokeballs)} disabled={disabled || pokeballs <= 0} onClick={onClick}/>
    )
}

export default PokeballButton