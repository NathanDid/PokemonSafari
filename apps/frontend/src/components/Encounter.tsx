import { PokemonType } from "../modules/game"
import styled from 'styled-components';

type Props = {
    currentPokemon?: PokemonType,
    isLoading: boolean
}

const Div = styled.div`
    .pokemon, .loader {
        height: 400px;
        overflow: hidden;
    }

    .pokemon img {
        max-height: 300px
    }

    .pokemon h1 {
        text-align: center;
        text-transform: capitalize;
    }
`;

const Encounter = (props: Props) => {
    if (props.isLoading) {
        return (
            <Div>
                <div className="loader">
                    <img src="loader.gif" />
                </div>
            </Div>
        )
    }

    if (props.currentPokemon) {
        return (
            <Div>
                <div className="pokemon">
                    <h1>{props.currentPokemon.name}</h1>
                    <img src={props.currentPokemon.image} className="pkm"/>
                </div>
            </Div>
        )
    }

    return (<p></p>)
}

export default Encounter