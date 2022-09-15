import ActionButton from "./ActionButton"

type Props = {
    label: string,
    disabled: boolean,
    onClick?: () => void,
    pokeballs?: number
}

const NextButton = ({ disabled, onClick, label}: Props) => {
    return(
        <ActionButton
            label={label}
            disabled={disabled}
            onClick={onClick}
        />
    )
}

export default NextButton