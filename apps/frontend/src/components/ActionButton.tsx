type Props = {
    label: string,
    disabled: boolean,
    onClick?: () => void,

}

const ActionButton = ({disabled, onClick, label}: Props) => {
    return(
        <button
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default ActionButton