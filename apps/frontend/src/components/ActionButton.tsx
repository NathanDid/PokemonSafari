type Props = {
    label: string,
    disabled: boolean,
    onClick?: () => void,
    pokeballs?: number
}

const getLabel = (props: Props) => {
    let label = props.label

    if (props.pokeballs) {
        label += ` (${props.pokeballs})`
    }

    return label
}

const ActionButton = (props: Props) => {
    return(
        <button
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {getLabel(props)}
        </button>
    )
}

export default ActionButton