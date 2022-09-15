import ActionButton from "./ActionButton"

const Action = () => {
    return(
        <>
            <ActionButton label="Pokeball" disabled={false}/>
            <ActionButton label="Caillou" disabled={true} />
            <ActionButton label="Appat" disabled={true} />
            <ActionButton label="Fuite" disabled={true} />
        </>
    )
} 

export default Action