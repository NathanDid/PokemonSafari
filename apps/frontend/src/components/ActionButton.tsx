type Props = {
    label: string,
    disabled: boolean
}
  
const ActionButton = (props: Props) => {
    return(<button disabled={ props.disabled }>
        { props.label }
    </button>)
} 

export default ActionButton