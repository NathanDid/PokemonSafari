import { PokemonType } from "../modules/game"
import styled from 'styled-components';

type Props = {
    isLoadingPokemon: boolean
    currentPokemon?: PokemonType
}

const Div = styled.div`
    h1 {
        text-transform: capitalize
    }
`;

const Encounter = (props: Props) => {
    if (props.isLoadingPokemon) {
        return (
            <Div></Div>
        )
    }

    if (props.currentPokemon) {
        return (
            <Div>
                <h1>{props.currentPokemon.name}</h1>
                <img src={props.currentPokemon.image}/>
            </Div>
        )
    }

    return (<p></p>)
}

export default Encounter